import React, { useState } from "react";
import logo from "./../assets/images/logo.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "../components/HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center md:gap-8 gap-4">
        <img src={logo} alt="Logo" className="md:w-[120px] w-[90px] mr-4" />
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex items-center md:gap-8 gap-4 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div
              className="absolute mt-3 bg-[#121212]
              border-[1px] border-gray-700 p-3 px-5 py-4"
            >
              {menu.map(
                (item, index) =>
                  index >= 3 && <HeaderItem key={index} name={item.name} Icon={item.icon} />
              )}
            </div>
          )}
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Profile"
        className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Header;
