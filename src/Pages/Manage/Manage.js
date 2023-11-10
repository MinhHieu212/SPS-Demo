import React from "react";
import './Manage.scss'
const ManageStaff = () => {
  return (
    <div className="Manage History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        QUẢN LÝ MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 wrapper items-center">
        <div className="w-full md:w-1/2 relative shadow-md">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold title-wrapper flex flex-row justify-center items-center text-center">
            <p className="text-xl w-1/2">TỔNG SỐ</p>
            <p className="text-xl w-1/2">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center content-wrapper items-center text-center">
            <p className="text-xl w-1/2">8</p>
            <p className="text-xl w-1/2">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStaff;
