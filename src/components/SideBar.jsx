import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { TbFileInvoice, TbLayoutDashboard } from "react-icons/tb";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { useNav } from "../stores/user.store";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg"

const SideBar = () => {

  const menus = [
    { name: "dashboard", link: "/", icon: TbLayoutDashboard },
    { name: "POS", link: "/pos", icon: FiShoppingCart },
    { name: "Invoices", link: "/invoices", icon: TbFileInvoice },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useNav((state)=>([ state.open , state.setOpen]), shallow );

  return (
    <aside className="h-screen min-h-screen fixed overflow-y-auto overflow-x-hidden sidebar">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-60 z-50 md:z-0" : "w-0 -translate-x-60 md:-translate-x-0 md:w-28"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
         {open ? 
          <CgMenuRight
            size={26}
            className="cursor-pointer hiden md:flex"
            onClick={() => setOpen(!open)}
          />
          : (
          <CgMenuLeft
            size={26}
            className="cursor-pointer hiden md:flex"
            onClick={() => setOpen(!open)}
          /> )
          }
        
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => {
            let size = open ? "28" : "34"
            return (
            <Link
              to={menu?.link}
              key={i}
              onClick={() => setOpen(false)}
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
             
            </Link>
          )})}
        </div>
      </div>    
    </aside>
  );
};

export default SideBar;