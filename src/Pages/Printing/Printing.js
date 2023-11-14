import React, { useEffect } from "react";
import "./Printing.scss";
import PrintingItem from "./PrintingItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import { FilterPrinterModal } from "../../Modals";
import { useNavigate } from "react-router-dom";

const info = [
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113620",
    base: 2,
    building: "H3",
    room: 202,
    status: "Hoạt động",
    request: 12,
  },
  {
    id: "2113621",
    base: 1,
    building: "B3",
    room: 602,
    status: "Hoạt động",
    request: 98,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113619",
    base: 2,
    building: "H6",
    room: 311,
    status: "Hoạt động",
    request: 5,
  },
  {
    id: "2113620",
    base: 2,
    building: "H3",
    room: 202,
    status: "Hoạt động",
    request: 12,
  },
  {
    id: "2113621",
    base: 1,
    building: "B3",
    room: 602,
    status: "Hoạt động",
    request: 98,
  },
];

const Printing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Role") !== "Student") {
      navigate("/Error");
    }
  }, []);

  return (
    <div className="Printing w-full px-[10px] max-w-[1280px] bg-[white] shadow-sm md:px-[32px] lg:px-[70px] mx-auto mb-5 min-h-[93vh]">
      <h2 className="text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3  text-[#066DCC] ">
        CHỌN MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        <div className="w-full md:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-[90%] outline-none border-none"
          />
          <SearchIcon></SearchIcon>
        </div>
        <div className="w-full md:w-1/2">
          <FilterPrinterModal>
            <div className="w-full cursor-pointer border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
              <span className="mx-3 text-[gray]">Lọc kết quả</span>
              <FilterIcon></FilterIcon>
            </div>
          </FilterPrinterModal>
        </div>
      </div>
      <hr className="sm-hr mt-4" />
      {info.map((printer, index) => (
        <PrintingItem
          id={printer.id}
          base={printer.base}
          building={printer.building}
          room={printer.room}
          status={printer.status}
          request={printer.request}
          key={index}
        ></PrintingItem>
      ))}
    </div>
  );
};

export default Printing;
