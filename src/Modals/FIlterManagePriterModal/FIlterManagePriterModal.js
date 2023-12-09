import React, { useEffect, useRef, useState } from "react";

export const value = {
  status: "all",
  location: "all",
  timeActive: "ascending",
};

const FIlterManagePriterModal = ({ children, functionRenderList }) => {
  const modalRef = useRef();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("all"); // all or enable or disable
  const [location, setLocation] = useState("all"); // all or cs1 or cs2
  const [timeActive, settimeActive] = useState("ascending"); // acsending or descending

  const cancelFilter = () => {
    setStatus("all");
    setLocation("all");
    settimeActive("ascending");
    value.status = "all";
    value.location = "all";
    value.timeActive = "ascending";
    //value.searchField = "";
    functionRenderList();
    setOpen(false);
  };

  const applyFilter = () => {
    value.status = status;
    value.location = location;
    value.timeActive = timeActive;

    functionRenderList();
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Wrapper relative z-10 w-full">
      <div className="Trigger" onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div
          className="content absolute z-10 top-[140%] md:right-0 right-[50%] translate-x-1/2 md:translate-x-0 h-[auto] p-3 bg-[#E6E6E6] rounded-lg min-h-[367px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md border-[1px] border-[#367FA9]  "
          ref={modalRef}
        >
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#E6E6E6] border-l-[1px] border-t-[1px] border-[#367FA9] top-[-11px] z-0 right-[15px] "></div>
          <div className="flex-col flex md:flex-row items-end justify-center gap-3 mb-3  ">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB] uppercase border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Lọc theo trạng thái
              </div>
              <div
                className={`${
                  status === "all" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus("all")}
              >
                Tất cả
              </div>
              <div
                className={`${
                  status === "enable" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus("enable")}
              >
                Hoạt động
              </div>
              <div
                className={`${
                  status === "disable" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setStatus("disable")}
              >
                Tạm dừng
              </div>
            </div>

            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
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
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] rounded-lg flex-col flex items-center shadow-md border-[1px] border-[#367FA9] ">
              <div className="text-[#1488DB]  uppercase text-[18px]  border-b-[3px] border-[#367FA9] h-[40px] flex items-center justify-center font-bold w-full my-2">
                Sắp xếp thời gian kích hoạt
              </div>
              <div
                className={`${
                  timeActive === "ascending" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => settimeActive("ascending")}
              >
                Tăng dần
              </div>
              <div
                className={`${
                  timeActive === "descending" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => settimeActive("descending")}
              >
                Giảm dần
              </div>
            </div>
            <div className=" w-[90%] mx-auto md:w-[48%] md:h-[150px] rounded-lg flex items-end justify-center gap-3">
              <button
                className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949]  shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[40%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
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
export default FIlterManagePriterModal;
