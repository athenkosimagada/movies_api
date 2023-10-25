import { useState } from "react";
import logo from "./../assets/images/logo.svg";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical, HiOutlineX } from "react-icons/hi";
import HeaderItem from "../components/HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showInput, setShowInput] = useState(false);
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
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex justify-between items-center p-5 absolute top-0 w-full max-w-[1220px] mx-auto z-20">
      <div className="flex items-center md:gap-8 gap-4">
        <img src={logo} alt="Logo" className="md:w-[120px] w-[80px] mr-4" />
        <div className="hidden lg:flex items-center gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="hidden sm:flex s items-center gap-8 lg:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
        </div>
        <div
          className="hidden lg:hidden sm:block ml-3"
          onClick={() => setToggle(!toggle)}
        >
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div
              className="absolute mt-3 bg-[#121212]
              border-[1px] border-gray-700 p-3 px-5 py-4
              z-10"
            >
              {menu.map(
                (item, index) =>
                  index >= 3 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="sm:hidden flex gap-2">
          <div className="" >
            <div onClick={() => setShowInput(!showInput)}>
              <HeaderItem name={""} Icon={menu[1].icon} />
            </div>
            {showInput && (
              <div
                className="fixed top-0 left-0 z-30 w-full bg-[#121212]
              border-[1px] border-gray-700 px-5 py-4 flex items-center gap-1"
              >
                <input
                  className="p-2 rounded-[5px] flex-1"
                  type="text"
                  placeholder="Search..."
                />
                <div className="bg-[#464646] cursor-pointer p-3 rounded-[5px]"
                onClick={() => setShowInput(!showInput)}>
                  <HiOutlineX />
                </div>
              </div>
            )}
          </div>
          <div className="" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div
                className="absolute right-[4.5rem] top-14 bg-[#121212]
              border-[1px] border-gray-700 p-3 px-5 py-4
              z-10"
              >
                {menu.map((item, index) => (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
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
    </div>
  );
}

export default Header;
