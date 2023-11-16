import "./SideBar.scss";
import React, { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import SidebarItem from "./SidebarItem";
import {
  StudentSideBarOption,
  SPSOSideBarOption,
  StaffSideBarOption,
} from "./SidebarItemList";
import { useRole } from "../../Contexts/RoleContext";

const SideBar = ({ showSideBar, elementRef }) => {
  const roleContext = useRole();
  const [userSideBar, setUserSideBar] = useState(StudentSideBarOption);

  useEffect(() => {
    if (roleContext.role === "spso") setUserSideBar(SPSOSideBarOption);
    else if (roleContext.role === "staff") setUserSideBar(StaffSideBarOption);
    else setUserSideBar(StudentSideBarOption);
  }, [roleContext.role]);

  return (
    <div
      className={`SideBar_Containter ${showSideBar ? "" : "SideBarHide"} 
        flex flex-col gap-y-3  items-center justify-start fixed z-50 w-[250px] h-[100vh] bg-[#367FA9] transition-all`}
      ref={elementRef}
    >
      {/* Short infomation of Student */}
      <StudentInfo></StudentInfo>

      {/* Sidebar Item (Pages) */}
      <nav className="flex flex-col gap-y-3">
        {userSideBar.map((item, index) => {
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
