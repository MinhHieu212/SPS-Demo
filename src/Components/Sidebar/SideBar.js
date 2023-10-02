import React from "react";
import StudentInfo from "./StudentInfo";
import SidebarItem from "./SidebarItem";
import {
  // StudentSideBarOption,
  SPSOSideBarOption,
  // StaffSideBarOption,
} from "./SidebarItemList";

const SideBar = ({ showSideBar, elementRef }) => {
  return (
    <div
      className={`SideBar_Containter ${showSideBar ? "" : "SideBarHide"} 
        flex flex-col gap-y-3  items-center justify-start fixed z-50 w-[250px] h-[100vh] bg-[#367FA9] transition-all`}
      ref={elementRef}
    >
      {/* Short infomation of Student */}
      <StudentInfo name={""} major={""}></StudentInfo>

      {/* Sidebar Item (Pages) */}
      <nav className="flex flex-col gap-y-3">
        {SPSOSideBarOption.map((item, index) => {
          return (
            <SidebarItem
              title={item.title}
              icon={item.icon}
              to={item.to}
              key={index}
            ></SidebarItem>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
