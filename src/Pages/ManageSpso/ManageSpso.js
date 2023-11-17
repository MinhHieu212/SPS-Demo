import React, { useEffect } from "react";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import "./ManageSpso.scss";
import ManageSpsoItem from "./ManageSpsoItem";
import { AddPrinterModal } from "../../Modals/AddPrinterModal/AddPrinterModal";
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
    status: "Ngưng hoạt động",
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
    status: "Ngưng hoạt động",
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
    status: "Ngưng hoạt động",
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
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);

  return (
    <div className="Manage mx-auto max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <div className="flex flex-row mt-8 border-b-4 border-black pb-2 md:pb-3 mb-4 items-center justify-between">
        <h2 className="text-3xl lg:text-4xl font-semibold printing-title pb-2 md:pb-3 pt-2 text-[#066DCC] ">
        QUẢN LÝ HỆ THỐNG MÁY IN
        </h2>
        <div>
          <AddPrinterModal>
            {/* <button type="button" className="them_mayin flexbox w-[6rem] md:w-[8rem] h-[2.5rem] bg-[#066DCC] text-white text-xs md:text-base font-bold ">Thêm máy in</button> */}
            <button className="text-[1rem] md:text-[1.25rem] text-white bg-[#066DCC] font-semibold md:px-[30px] px-[10px] py-2 rounded-md">
              Thêm máy in
            </button>
          </AddPrinterModal>
        </div>
      </div>

        
      <div className="flex flex-col-reverse md:flex-row mt-4 items-start manageSPSO-outer-flex">
        <div className="w-full md:w-1/2 lg:w-1/3 relative shadow-lg rounded-md overflow-hidden">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[10px] rou">
            <p className="text-base lg:text-xl w-[40%]">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-[60%]">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-[40%]">10</p>
            <p className="text-base lg:text-xl w-[60%]">2</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row gap-3 ">
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
              placeholder="Lọc máy in"
              className="w-full outline-none border-none"
            />
            <FilterIcon></FilterIcon>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-[16px] lg:text-[20px] font-bold py-3 px-4 mt-8 rounded-sm w-[714px] md:w-full text-white">
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
