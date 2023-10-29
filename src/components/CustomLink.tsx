import { Link, useMatch, useResolvedPath } from "react-router-dom";
interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

function CustomLink({ to, children, handleClick, ...props }: CustomLinkProps) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  const onClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
