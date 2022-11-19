import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { useNav } from "../stores/user.store";

const SideBar = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useNav((state)=>([ state.open , state.setOpen]), shallow );

  return (
    <aside className="h-screen min-h-screen fixed">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-60 z-10" : "w-0 -translate-x-60 md:-translate-x-0 md:w-32"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <AiOutlineHeart
            size={26}
            className="cursor-pointer hidden md:flex"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => {
            let size = open ? "28" : "40"
            return (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="ml-4">{React.createElement(menu?.icon, { size: size })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-28 group-hover:duration-300 group-hover:w-fit `}
              >
                {menu?.name}
              </h2>
            </Link>
          )})}
        </div>
      </div>    
    </aside>
  );
};

export default SideBar;