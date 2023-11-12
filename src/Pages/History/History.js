import React from "react";
import "./History.scss";
import HistoryItem from "./HistoryItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import PrintingLogFilterModal from "../../Modals/PrintingLogFilterModal";
import { useNavigate } from "react-router";

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
    if (
      localStorage.getItem("Role") === "Staff" ||
      localStorage.getItem("Role") === "SPSO"
    ) {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="History max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        LỊCH SỬ IN ẤN
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
        <div className="flex flex-col w-full md:w-1/2 gap-4">
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
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm print-section">
          <div className="text-center">TÊN FILE</div>
          <div className="text-center">ID MÁY IN</div>
          <div className="text-center">VỊ TRÍ</div>
          <div className="text-center">NGÀY IN</div>
          <div className="text-center">TRẠNG THÁI</div>
          <div className="text-center">TÙY CHỌN</div>
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
