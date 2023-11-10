import React from "react";
import { useNavigate } from "react-router-dom";
import { HcmutIcon } from "../../Assets/Icons/Icons";
import "./Header.scss";

const HeaderBeforeLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate("/Login");
    }, 500);
  };

  return (
    <div className="HeaderBeforeLogin_container w-[100vw] h-[66px] bg-[#3C8DBC] flex items-center justify-between fixed z-50  ">
      <div className="Header_SystemName flex items-center transition-all">
        <div className="system_name  hidden md:flex items-center justify-center text-white font-bold text-[20px] bg-[#367FA9] h-[66px] w-[250px] bg-gradient-to-br from-cyan-500 to-#3C8DBC ">
          {"Smart Printing System"}
        </div>
        <div className="system_name md:hidden text-white font-bold text-[20px] bg-[#367FA9] h-[66px] w-[100px] bg-gradient-to-br bg-transparent flex items-center justify-center ">
          {"SPSS"}
        </div>
      </div>
      <div className="Header_UserInfo flex items-center justify-between gap-3 mr-3">
        {<HcmutIcon />}
        <button
          onClick={handleLogin}
          className="text-white pr-5 font-semibold cursor-pointer"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default HeaderBeforeLogin;
