import React from "react";
import './Manage.scss'
const Manage = () => {
  return (
    <div className="Manage History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        QUẢN LÝ MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 wrapper items-center">
        <div className="w-full md:w-1/2 relative shadow-md">
          <div className="bg-[#3C8DBC] text-white text-center text-xl font-bold title-wrapper">
            TỔNG SỐ TRANG ĐÃ IN
          </div>
          <div className="bg-white flex flex-row text-base font-bold  content-wrapper">
            <div className="w-1/2 flex flex-col justify-evenly items-center">
              <p className="text-xl">Size A4</p>
              <p className="text-xl">300</p>
            </div>
            <div className="w-1/2 flex flex-col justify-evenly items-center">
              <p className="text-xl">Size A3</p>
              <p className="text-xl">300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
