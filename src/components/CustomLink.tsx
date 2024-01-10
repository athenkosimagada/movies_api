import { Link } from "react-router-dom";
interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

function CustomLink({ to, isActive, children, ...props }: CustomLinkProps) {
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
