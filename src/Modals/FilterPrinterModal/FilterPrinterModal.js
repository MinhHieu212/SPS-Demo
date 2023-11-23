import { async } from "q";
import React, { useEffect, useState } from "react";

const FilterPrinterModal = ({ children, setParams = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null); //nullor 1 or 0
  const [facility, setFacility] = useState(null); //nullor CS1 or CS2
  const [sortDirection, setSortDirection] = useState(1); // acsending or descending
  const [searchField, setSearchField] = useState();
  const [filterParams, setFilterParams] = useState({
    status: status,
    facility: facility,
    sortDirection: sortDirection,
  });

  useEffect(() => {
    setFilterParams({
      status: status,
      facility: facility,
      sortDirection: sortDirection,
    });
  }, [status, facility, sortDirection]);

  const applyFilter = async () => {
    console.log("Params Filter Printer : ", filterParams);
    await setParams(filterParams);
    setOpen(false);
  };

  const cancelFilter = async () => {
    setStatus(null);
    setFacility(null);
    setSortDirection(1);

    await setParams({
      status: null,
      facility: null,
      sortDirection: 1,
    });

    setOpen(false);
  };

  return (
    <div className="Wrapper relative z-10 w-full">
      <div className="Trigger" onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div className="content absolute z-10 top-[140%] md:right-0 right-[50%] translate-x-1/2 md:translate-x-0 h-[auto] p-3 bg-[#E6E6E6] rounded-lg min-h-[367px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md border-[1px] border-[#367FA9]  ">
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#E6E6E6] border-l-[1px] border-t-[1px] border-[#367FA9] top-[-11px] z-0 right-[15px] "></div>
          <div className="flex-col flex md:flex-row items-end justify-center gap-3 mb-3  ">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB] uppercase border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Lọc theo trạng thái
              </div>
              <div
                className={`${
                  status === null ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus(null)}
              >
                Tất cả
              </div>
              <div
                className={`${
                  status === "1" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus("1")}
              >
                Hoạt động
              </div>
              <div
                className={`${
                  status === "0" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus("0")}
              >
                Ngưng hoạt động
              </div>
            </div>

            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB] uppercase border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Lọc theo vị trí
              </div>
              <div
                className={`${
                  facility === null ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setFacility(null)}
              >
                Tất cả
              </div>
              <div
                className={`${
                  facility === "CS1" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setFacility("CS1")}
              >
                Cơ sở 1
              </div>
              <div
                className={`${
                  facility === "CS2" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setFacility("CS2")}
              >
                Cơ sở 2
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center gap-3 md:flex-row flex-col">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB]  uppercase text-[18px]  border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Sắp xếp hàng đợi
              </div>
              <div
                className={`${
                  sortDirection === 1 ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSortDirection(1)}
              >
                Tăng dần
              </div>
              <div
                className={`${
                  sortDirection === -1 ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSortDirection(-1)}
              >
                Giảm dần
              </div>
            </div>
            <div className=" w-[90%] mx-auto md:w-[48%] md:h-[150px] rounded-lg flex items-end justify-center gap-3">
              <button
                className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949] shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[40%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
                onClick={cancelFilter}
              >
                Hủy
              </button>
              <button
                className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[40%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
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

export default FilterPrinterModal;
