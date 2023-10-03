import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, icon, to, isActive }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={`${
          isActive ? "SideBar_Option" : ""
        } rounded-md bg-[#3C8DBC] text-white w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold transition-all bg-gradient-to-r from-cyan-500 to-#3C8DBC hover:bg-blue-300 duration-300`}
      >
        <span className="capitalize">{title}</span>
        <div className="Support-Icon h-full flex justify-center items-center w-[66px]">
          {icon}
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
