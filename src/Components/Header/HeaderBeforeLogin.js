import React from "react";
import { Link } from "react-router-dom";
import { HcmutIcon } from "../../Assets/Icons/Icons";
import "./Header.scss";

const HeaderBeforeLogin = () => {
  return (
    <div className="HeaderBeforeLogin_container w-[100vw] h-[66px] bg-[#3C8DBC] flex items-center justify-between fixed z-50  ">
      <div className="Header_SystemName flex items-center transition-all">
        <div className="system_name flex items-center justify-center text-white font-bold text-[20px] bg-[#367FA9] h-[66px] w-[250px] bg-gradient-to-br from-cyan-500 to-#3C8DBC">
          Smart Printing System
        </div>
      </div>
      <div className="Header_UserInfo flex items-center justify-between gap-3 mr-4">
        {<HcmutIcon />}
        <Link to="/Login">
          <span className="text-white pr-3 font-semibold cursor-pointer">
            Đăng nhập
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderBeforeLogin;
