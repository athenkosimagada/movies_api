import React from "react";

interface HeaderItemProps {
  name: string;
  Icon: React.FC;
}

function HeaderItem({ name, Icon }: HeaderItemProps) {
  return (
    <div
      className="text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer 
    hover:underline underline-offset-8 mb-2"
    >
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
