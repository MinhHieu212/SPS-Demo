import React from "react";
import { NavLink } from "react-router-dom";
import { useNewNotice } from "../../Contexts/NoticeContext";

const SidebarItem = ({ title, icon, to, isActive }) => {
  const newNoticeContext = useNewNotice();

  return (
    <div>
      <NavLink
        to={to}
        className={`${
          isActive ? "SideBar_Option" : ""
        } rounded-md bg-[#3C8DBC] text-white w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold transition-all bg-gradient-to-r from-cyan-500 to-#3C8DBC hover:bg-blue-300 duration-300`}
      >
        <span className="capitalize">{title}</span>
        <div className="Support-Icon h-full relative flex justify-center items-center w-[66px]">
          {icon}
          {title === "Thông báo" &&
            (newNoticeContext.newNotice === 0 ? (
              ""
            ) : (
              <div className="absolute text-[12] lg:text-[14px] top-[-2px] right-0 rounded-[50%] w-[22px] h-[22px] text-white bg-red-600 flex items-center justify-center">
                {newNoticeContext.newNotice}
              </div>
            ))}
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
