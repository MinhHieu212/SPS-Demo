import React, { useEffect } from "react";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import "./ManageSpso.scss";
import ManageSpsoItem from "./ManageSpsoItem";
import { useNavigate } from "react-router";
const printers = [
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
];
const ManageSpso = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "SPSO") {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Manage mx-auto  max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2  md:pb-3  text-[#066DCC] ">
        QUẢN LÝ HỆ THỐNG MÁY IN
      </h2>
      <div className="flex flex-col-reverse md:flex-row mt-4 items-center manageSPSO-outer-flex">
        <div className="w-full md:w-1/2 lg:w-1/3 relative shadow-md">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[10px]">
            <p className="text-base lg:text-xl w-1/2">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-1/2">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-1/2">10</p>
            <p className="text-base lg:text-xl w-1/2">2</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row manageSPSO-inner-flex">
          <div className="w-full lg:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID sinh viên"
              className="w-full outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="w-full lg:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID sinh viên"
              className="w-full outline-none border-none"
            />
            <FilterIcon></FilterIcon>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm w-[714px] md:w-full text-white">
          <div className="text-center w-[10%]">ID MÁY IN</div>
          <div className="text-center w-[20%]">VỊ TRÍ</div>
          <div className="text-center w-[20%]"> KÍCH HOẠT</div>
          <div className="text-center w-[25%]">SỐ YÊU CẦU IN</div>
          <div className="text-center w-[25%]">TRẠNG THÁI</div>
        </div>
        {printers.map((printer) => (
          <ManageSpsoItem
            id={printer.id}
            location={printer.location}
            date={printer.date}
            queue={printer.queue}
            status={printer.status}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageSpso;
