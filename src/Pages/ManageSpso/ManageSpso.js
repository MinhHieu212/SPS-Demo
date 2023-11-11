import React from "react";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
const ManageSpso = () => {
  return (
    <div className="Manage History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        QUẢN LÝ HỆ THỐNG MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 items-center gap-4">
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-full lg:w-[90%] border border-black"
          />
          <div className="absolute right-[3%] md:right-[6%] lg:right-[12%] bottom-1/2 translate-y-1/2">
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative shadow-md">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[8px]">
            <p className="text-base lg:text-xl w-1/2">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-1/2">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-1/2">10</p>
            <p className="text-base lg:text-xl w-1/2">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSpso;
