// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigator = ({
  hideNav,
  shadow1,
  shadow2,
  shadow3,
  handleOnClick1,
  handleOnClick2,
  handleOnClick3,
}) => {
  return (
    <div
      className={` ${hideNav ? "" : "Navigator_Containter"} 
        flex flex-col gap-y-3 pt-3 items-center justify-start fixed w-[250px] h-[100vh] bg-[#367FA9] transition-all`}
    >
      <div className="Navigator_UserInfo w-[236px] flex flex-col items-start justify-between gap-y-1 ">
        <div className="flex w-full justify-between items-center">
          <div className="Navigator_UserName text-white fon onClick={handleOnClick}t-bold">
            Nguyen Anh Kim Minh
          </div>
          <div className="border border-gray-300 mr-[6px] h-11 w-11 rounded-full overflow-hidden">
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQEovqvV05Duyw/company-logo_200_200/0?e=2159024400&v=beta&t=b021HtjGIHS1D-ZepG1OrVOufgpeRqToyE-oaqrlXW0"
              alt=""
              className="w-full h-full object-fill "
            />
          </div>
        </div>
        <div className="Navigator_UserMajor text-white text-[10px] w-[180px]">
          Khoa khoa học và kỹ thuật máy tính
        </div>
      </div>
      <Link to="/Home">
        <div
          className={`${
            shadow1 ? "Navigator_Option" : ""
          }  rounded-md bg-[#3C8DBC]  w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold text-white transition-all`}
          onClick={handleOnClick1}
        >
          <span>Home</span>
          <div className="h-full flex justify-center items-center w-[66px]">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15V9.70588H12V15H17V7.94118H20L10 0L0 7.94118H3V15H8Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/Printing">
        <div
          className={`${
            shadow2 ? "Navigator_Option" : ""
          }  rounded-md bg-[#3C8DBC] text-white w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold transition-all`}
          onClick={handleOnClick2}
        >
          <span>Printing</span>
          <div className="h-full flex justify-center items-center w-[66px]">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7917 5.33333H3.20837C1.47921 5.33333 0.083374 6.72917 0.083374 8.45833V14.7083H4.25004V18.875H16.75V14.7083H20.9167V8.45833C20.9167 6.72917 19.5209 5.33333 17.7917 5.33333ZM14.6667 16.7917H6.33337V11.5833H14.6667V16.7917ZM17.7917 9.5C17.2188 9.5 16.75 9.03125 16.75 8.45833C16.75 7.88542 17.2188 7.41667 17.7917 7.41667C18.3646 7.41667 18.8334 7.88542 18.8334 8.45833C18.8334 9.03125 18.3646 9.5 17.7917 9.5ZM16.75 0.125H4.25004V4.29167H16.75V0.125Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/Support">
        <div
          className={`${
            shadow3 ? "Navigator_Option" : ""
          }  rounded-md bg-[#3C8DBC] text-white w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold transition-all`}
          onClick={handleOnClick3}
        >
          <span>Support</span>
          <div className="h-full flex justify-center items-center w-[66px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4167 0.75H2.58333C1.575 0.75 0.75 1.575 0.75 2.58333V15.4167C0.75 16.425 1.575 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75ZM10.8333 13.5833H4.41667V11.75H10.8333V13.5833ZM13.5833 9.91667H4.41667V8.08333H13.5833V9.91667ZM13.5833 6.25H4.41667V4.41667H13.5833V6.25Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navigator;
