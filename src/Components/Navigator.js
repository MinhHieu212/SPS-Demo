import React from "react";
import { Link } from "react-router-dom";

const Navigator = ({ showNav }) => {
  return (
    <div>
      <div
        className={` ${
          showNav ? "" : "Navigator"
        } flex flex-col gap-y-3 pt-3 items-center justify-start fixed w-[250px] h-[100vh] bg-[#367FA9]`}
      >
        <div className="w-[236px] flex flex-col items-start justify-between gap-y-1 ">
          <div className="flex w-full justify-between items-center">
            <div className="text-white font-bold"> Nguyen Anh Kim Minh</div>

            <div className="border border-gray-300 mr-[6px] h-11 w-11 rounded-full overflow-hidden">
              <img
                src="https://media-exp1.licdn.com/dms/image/C510BAQEovqvV05Duyw/company-logo_200_200/0?e=2159024400&v=beta&t=b021HtjGIHS1D-ZepG1OrVOufgpeRqToyE-oaqrlXW0"
                alt=""
                className="w-full h-full object-fill "
              />
            </div>
          </div>
          <div className="text-white text-[10px] w-[180px]">
            Khoa khoa học và kỹ thuật máy tính
          </div>
        </div>
        <Link to="/Home">
          <div className="Nav_item rounded-md bg-[#3C8DBC]  w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold">
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
          <div className="Nav_item rounded-md bg-[#3C8DBC]  w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold">
            <span>Printing</span>
            <div className="h-full flex justify-center items-center w-[66px]">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Link>
        <Link to="/Support">
          <div className="Nav_item rounded-md bg-[#3C8DBC]  w-[236px] h-[50px] flex pl-2 justify-between items-center text-[16px] font-bold">
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
    </div>
  );
};

export default Navigator;
