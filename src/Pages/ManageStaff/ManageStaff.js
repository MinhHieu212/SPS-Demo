import React, { useEffect } from "react";
import "./Manage.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ManageItem from "./ManageItem";
import { useNavigate } from "react-router";
const printers = [
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
  {
    id: "2113619",
    queue: 6,
    status: "Hoạt động",
  },
];
const totalPrinters = 15;
const onlinePrinters = 8;

const ManageStaff = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "Staff") {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Manage History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        QUẢN LÝ MÁY IN
      </h2>
      <div className="flex flex-col-reverse md:flex-row mt-4 items-start justify-between ">
        <div className="w-full md:w-[40%] flex flex-col justify-center  relative shadow-md">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[8px]">
            <p className="text-base lg:text-xl w-1/2">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-1/2">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-1/2">{totalPrinters}</p>
            <p className="text-base lg:text-xl w-1/2">{onlinePrinters}</p>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex mb-3 items-start justify-between relative">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-full lg:w-[90%] border block border-black"
          />
          <div className="absolute right-[3%] md:right-[6%] lg:right-[12%] bottom-1/2 translate-y-1/2">
            <SearchIcon></SearchIcon>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="text-white flex flex-row justify-between items-center bg-[#3C8DBC] text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm w-[714px] md:w-full">
          <div className="  min-w-[10%]">ID MÁY IN</div>
          <div className="text-center min-w-[30%]">SỐ YÊU CẦU IN</div>
          <div className="text-center  min-w-[25%]">LỊCH SỬ IN</div>
          <div className=" text-center min-w-[30%]">TRẠNG THÁI</div>
        </div>
        {printers.map((printer) => (
          <ManageItem
            id={printer.id}
            queue={printer.queue}
            status={printer.status}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageStaff;
