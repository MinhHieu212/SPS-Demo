import React, { useState } from "react";

const ActivitiesFilterModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [location, setLocation] = useState("all"); // all or cs1 or cs2
  const [sort, setSort] = useState("latest");
  const [date1, setDate1] = useState("none");
  const [date2, setDate2] = useState("none");

  const cancelFilter = () => {
    setLocation("all");
    setSort("latest");
    setDate1("none");
    setDate2("none");
    setOpen(false);
  };

  const applyFilter = () => {
    console.log("Params Filter Activity : ", {
      location: location,
      sort: sort,
      date1: date1,
      date2: date2,
    });
    setOpen(false);
  };
  return (
    <div className="Wrapper relative h-[auto] z-10 w-full">
      <div
        className="Trigger w-full justify-center"
        onClick={() => setOpen(!open)}
      >
        {children}
      </div>
      {open && (
        <div className="content absolute z-10 top-[140%] right-[50%] translate-x-1/2 md:right-[0] md:translate-x-0 h-[auto] p-3 bg-[#E6E6E6] rounded-lg min-h-[367px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md border-[1px] border-[#367FA9] ">
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#E6E6E6] top-[-10px] right-[15px]  border-l-[1px] border-t-[1px] border-[#367FA9]"></div>
          <div className="flex-col flex md:flex-row items-end justify-center gap-3 mb-3">
            <div className="bg-white h-[170px] md:h-[200px] rounded-lg flex-col flex items-center shadow-lg w-[90%] gap-2 mx-auto md:w-[48%]  border-[1px] border-[#367FA9]">
              <div className="text-[#1488DB] border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Khoảng thời gian
              </div>
              <div className="flex items-center w-full px-3 justify-between">
                <span className="mr-2 text-[18px] font-bold">Từ</span>
                <input
                  onChange={(e) => setDate1(e.target.value)}
                  type="date"
                  className="pl-2 h-[40px] rounded-md bg-[#E6E6E6] flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
              <div className="flex items-center w-full px-3 mt-[9px] justify-between">
                <span className="mr-2 text-[18px] font-bold">Đến</span>
                <input
                  type="date"
                  onChange={(e) => setDate2(e.target.value)}
                  className="pl-2 h-[40px] bg-[#E6E6E6]  rounded-md flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
            </div>
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9]">
              <div className="text-[#1488DB] uppercase border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Lọc theo vị trí
              </div>
              <div
                className={`${
                  location === "all" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setLocation("all")}
              >
                Tất cả
              </div>
              <div
                className={`${
                  location === "cs1" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setLocation("cs1")}
              >
                Cơ sở 1
              </div>
              <div
                className={`${
                  location === "cs2" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setLocation("cs2")}
              >
                Cơ sở 2
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center gap-3 md:flex-row flex-col">
            <div className="bg-white w-[90%] md:w-[48%] h-[140px] md:h-[150px] mx-auto rounded-md flex-col flex items-center shadow-md border-[1px] border-[#367FA9]">
              <div className="text-[#1488DB] uppercase  border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Sắp xếp theo thời gian
              </div>
              <div
                className={`${
                  sort === "latest" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("latest")}
              >
                Mới nhất
              </div>
              <div
                className={`${
                  sort === "oldest" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] mb-1`}
                onClick={() => setSort("oldest")}
              >
                Cũ nhất
              </div>
            </div>
            <div className=" w-[90%] mx-auto md:w-[48%] md:h-[150px] rounded-lg flex items-end justify-center gap-3">
              <button
                className="bg-[#a1a1a1] shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[40%] block rounded-lg text-[15px] md:text-[18px] font-semibold text-white"
                onClick={cancelFilter}
              >
                Hủy
              </button>
              <button
                className="bg-blue-400 shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[40%] block rounded-lg text-[15px] md:text-[18px] font-semibold text-white"
                onClick={applyFilter}
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesFilterModal;
