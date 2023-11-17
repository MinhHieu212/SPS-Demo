import React, { useEffect } from "react";
import "./Activities.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ActivityItem from "./ActivityItem";
import { ActivitiesFilterModal } from "../../Modals";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    studentName: "Nguyễn Phạm Thiên Phúc",
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
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="Activities max-w-[1280px] px-[10px] md:px-[20px] bg-[white] mx-auto shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3  printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3  text-[#066DCC]">
        HOẠT ĐỘNG IN ẤN
      </h2>
      <div className="w-[100%] flex flex-col items-start md:flex-row mt-3 gap-3">
        <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-3 md:w-[70%] activity-inner-flex-input">
          <div className="w-[100%] border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID sinh viên"
              className="w-full outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="w-[100%]  mx-auto border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID máy in"
              className="w-full outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
        </div>

        <div className="w-[90%] md:w-[30%] mx-auto">
          <ActivitiesFilterModal>
            <div className="w-full border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
              <input
                type="text"
                placeholder="Lọc kết quả"
                className="w-full outline-none border-none"
                readOnly
              />
              <FilterIcon></FilterIcon>
            </div>
          </ActivitiesFilterModal>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px]  flex flex-row mx-auto justify-between shadow-lg items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
          <div className=" w-[25%]">SINH VIÊN</div>
          <div className="text-center w-[15%]">ID SINH VIÊN</div>
          <div className="text-center w-[15%]">ID MÁY IN</div>
          <div className="text-center w-[20%]">VỊ TRÍ</div>
          <div className="text-center w-[15%]">NGÀY IN</div>
          <div className="text-center w-[10%]">CHI TIẾT</div>
        </div>
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            studentName={activity.studentName}
            studentId={activity.studentId}
            printerId={activity.printerId}
            location={activity.location}
            date={activity.date}
            // fileName={activity.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
