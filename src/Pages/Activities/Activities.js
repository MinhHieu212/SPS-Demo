import React, { useEffect } from "react";
import "./Activities.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ActivityItem from "./ActivityItem";
import { useNavigate } from "react-router";
const activities = [
  {
    studentName: "Nguyễn Phạm Thiên Phúc",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName:
      "tangaidaicuong1.pdfffffffffffffffffffffffffffffffffffffffffffffffffff",
  },
  {
    studentName: "Trương Thuận Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Trần Minh Hiếu",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "David Nguyễn",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Võ Tấn Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
  {
    studentName: "Trương Thuận Hưng",
    studentId: "2113619",
    printerId: "12345678",
    location: "CS2, H6, 304",
    date: "21/10/2023",
    fileName: "tangaidaicuong1.pdf",
  },
];
const Activities = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "SPSO") {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Activities mx-auto max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-8 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        HOẠT ĐỘNG IN ẤN
      </h2>
      <div className="flex flex-col md:flex-row mt-5 activity-outer-flex-input">
        <div className="flex flex-col lg:flex-row w-full md:w-2/3 activity-inner-flex-input">
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
              placeholder="Tìm theo ID máy in"
              className="w-full outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
        </div>
        <div className="w-full md:w-1/3 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
          <input
            type="text"
            placeholder="Lọc kết quả"
            className="w-full outline-none border-none"
            readOnly
          />
          <FilterIcon></FilterIcon>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center bg-[#3C8DBC] text-base lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm w-[714px] md:w-full text-white">
          <div className=" min-w-[18%]">SINH VIÊN</div>
          <div className="text-center min-w-[15%]">ID SINH VIÊN</div>
          <div className="text-center min-w-[15%]">ID MÁY IN</div>
          <div className="text-center min-w-[15%]">VỊ TRÍ</div>
          <div className="text-center min-w-[15%]">NGÀY IN</div>
          <div className=" min-w-[22%]">TÊN FILE</div>
        </div>
        {activities.map((activity) => (
          <ActivityItem
            studentName={activity.studentName}
            studentId={activity.studentId}
            printerId={activity.printerId}
            location={activity.location}
            date={activity.date}
            fileName={activity.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
