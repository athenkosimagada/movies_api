interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

function CustomLink({ to, isActive, children, ...props }: CustomLinkProps) {
  return (
    <li className={isActive ? "active" : ""}>
      <a href={to} {...props}>
        {children}
      </a>
    </li>
  );
}

export default CustomLink;
