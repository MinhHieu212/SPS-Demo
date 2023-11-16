import React, { useEffect } from "react";
import "./History.scss";
import HistoryItem from "./HistoryItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import { FilterHistoryModal } from "../../Modals";
import { useNavigate } from "react-router-dom";

const files = [
  {
    fileName: "coluuchat.pdf",
    printerId: "2113619",
    position: "CS2, H6, 304",
    date: "12-03-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "hedieuhanh.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "02-12-2021",
    status: "Đang in",
  },
  {
    fileName: "tangaidaicuong.pdf",
    printerId: "2113619",
    position: "CS1, B3, 201",
    date: "01-11-2023",
    status: "Đang đợi",
  },
  {
    fileName: "coluuchat.pdf",
    printerId: "2113619",
    position: "CS2, H6, 304",
    date: "12-03-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "sucbenvatlieu.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "27-09-2020",
    status: "Đã xong",
  },
  {
    fileName: "hedieuhanh.pdf",
    printerId: "2113620",
    position: "CS1, B3, 201",
    date: "02-12-2021",
    status: "Đã xong",
  },
  {
    fileName: "tangaidaicuong.pdf",
    printerId: "2113619",
    position: "CS1, B3, 201",
    date: "01-11-2023",
    status: "Đang đợi",
  },
];
const History = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3  text-[#066DCC] ">
        LỊCH SỬ IN ẤN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 wrapper  items-center">
        <div className="w-full md:w-[40%] rounded-md overflow-hidden relative shadow-lg">
          <div className="bg-[#3C8DBC] text-white text-center text-xl font-bold title-wrapper">
            TỔNG SỐ TRANG ĐÃ IN
          </div>

          <div className="bg-white flex flex-row text-[16px] lg:text-[20px] font-bold ">
            <div className="w-1/2 py-3 text-center">
              <span className="text-xl text-[#3C8DBC] mr-2">Size A4:</span>
              <span text-center className="text-xl">
                300
              </span>
            </div>

            <div className="w-1/2  py-3 text-center">
              <span className="text-xl text-[#3C8DBC] mr-2">Size A3:</span>
              <span className="text-xl">300</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[60%] gap-3  mt-3">
          <div className="w-full border h-[50px] border-black rounded-md flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID máy in"
              className="w-[90%] outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="w-full">
            <FilterHistoryModal>
              <div className="w-full cursor-pointer border h-[50px] border-black rounded-md flex items-center justify-between pr-3 bg-white">
                <span className="mx-3 text-[gray]">Lọc kết quả</span>
                <FilterIcon></FilterIcon>
              </div>
            </FilterHistoryModal>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC]  text-[16px] md:text-[20px] lg:text-lg font-bold py-3  min-w-[780px] px-4 mt-8 rounded-sm">
          <div className="w-[25%]">TÊN FILE</div>
          <div className="text-center w-[15%]">ID MÁY IN</div>
          <div className="text-center w-[15%]">VỊ TRÍ</div>
          <div className="text-center w-[15%]">NGÀY IN</div>
          <div className="text-center w-[15%]">TRẠNG THÁI</div>
          <div className="text-center w-[15%]">TÙY CHỌN</div>
        </div>
        {files.map((file, index) => (
          <HistoryItem
            fileName={file.fileName}
            printerId={file.printerId}
            position={file.position}
            date={file.date}
            status={file.status}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
