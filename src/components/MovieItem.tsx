import React, { useEffect, useState, useRef } from "react";

interface MovieItemProps {
  name: string;
  pic: string;
}

function MovieItem({ name, pic }: MovieItemProps) {
  const [opacity, setOpacity] = useState(0.3);
  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <div className="flex-1 relative rounded-[5px] 
    overflow-hidden border-[1px] border-[#55a0c1]">
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        style={{
            background:
              "linear-gradient(to bottom, rgba(26, 205, 255, 0.3) 0%, rgba(26, 205, 255, 0.1) 100%)",
            opacity: opacity,
            transition: "opacity 0.3s",
          }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h2>{name}</h2>
      </div>
      <img src={pic} alt={name} className="w-full aspect-[16/9] h-auto" />
    </div>
  );
}

export default MovieItem;
