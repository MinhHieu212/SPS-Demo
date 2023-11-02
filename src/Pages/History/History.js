import React from "react";
import "./History.scss";
import HistoryItem from "./HistoryItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import PrintingLogFilterModal from "../../Modals/PrintingLogFilterModal";

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
    status: "Đã xong",
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
  return (
    <div className="History max-w-[1280px]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3">
        LỊCH SỬ IN ẤN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 wrapper">
        <div className="w-full md:w-1/2 relative">
          <div className="bg-[#3C8DBC] text-white text-center text-xl font-bold rounded-lg title-wrapper">
            TỔNG SỐ TRANG ĐÃ IN
          </div>
          <div className="bg-white flex flex-row text-base font-bold rounded-lg mt-2 content-wrapper">
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
        <div className="flex flex-col w-full md:w-1/2 gap-4 mt-3">
          <div className="w-full  border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID máy in"
              className="w-[90%] outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="w-full ">
            <PrintingLogFilterModal>
              <div className="w-full cursor-pointer border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
                <span className="mx-3 text-[gray]">Lọc kết quả</span>
                <FilterIcon></FilterIcon>
              </div>
            </PrintingLogFilterModal>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-md print-section">
          <div>TÊN FILE</div>
          <div>ID MÁY IN</div>
          <div>VỊ TRÍ</div>
          <div>NGÀY IN</div>
          <div>TRẠNG THÁI</div>
          <div>TÙY CHỌN</div>
        </div>
        {files.map((file) => (
          <HistoryItem
            fileName={file.fileName}
            printerId={file.printerId}
            position={file.position}
            date={file.date}
            status={file.status}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
