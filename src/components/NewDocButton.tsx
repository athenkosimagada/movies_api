import React from "react";

interface NewDocButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonName?: string;
  buttonIcon?: React.ReactNode;
  // Add custom props
}

function NewDocButton({
  buttonName,
  buttonIcon,
  ...restProps
}: NewDocButtonProps) {
  return (
    <button {...restProps}>
      {buttonIcon && <span className="btn-icon">{buttonIcon}</span>}
      {buttonName && <span className="btn-name">{buttonName}</span>}
    </button>
  );
}

export default NewDocButton;
