import React, { useEffect, useState } from "react";

const ActivitiesFilterModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [alphabet, setAlphabet] = useState("all");
  const [sort, setSort] = useState("all");

  const cancelFilter = () => {
    setOpen(false);
    setSort("all");
    setAlphabet("all");
  };

  const applyFilter = () => {
    console.log("Params Filter Activity : ", {
      alphabet: alphabet,
      sort: sort,
    });
    setOpen(false);
  };

  useEffect(() => {
    if (alphabet !== "all") {
      setSort("all");
    }
  }, [sort]);

  useEffect(() => {
    if (sort !== "all") {
      setAlphabet("all");
    }
  }, [alphabet]);

  return (
    <div className="Wrapper relative h-[auto] z-10 w-full">
      <div
        className="Trigger w-full justify-center"
        onClick={() => setOpen(!open)}
      >
        {children}
      </div>
      {open && (
        <div className="content absolute z-10 top-[140%] right-[50%] translate-x-1/2 md:right-[0] md:translate-x-0 h-[auto] p-3 bg-[#E6E6E6] rounded-lg min-h-[250px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md border-[1px] border-[#367FA9] ">
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#E6E6E6] top-[-10px] right-[15px]  border-l-[1px] border-t-[1px] border-[#367FA9]"></div>
          <p className="w-[80%] mx-auto mb-1 text-center text-[blue] font-bold">
            (Chỉ có thể chọn một trong hai kiểu lọc dưới đây)
          </p>
          <div className="flex items-end justify-center gap-3 md:flex-row flex-col">
            <div className="bg-white w-[90%] md:w-[48%] h-[170px] md:h-[180px] mx-auto rounded-md flex-col flex items-center shadow-md border-[1px] border-[#367FA9]">
              <div className="text-[#1488DB] uppercase  border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Hiển thị tên theo
              </div>
              <div
                className={`${
                  alphabet === "all" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setAlphabet("all")}
              >
                Tất cả
              </div>
              <div
                className={`${
                  alphabet === "a-z" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setAlphabet("a-z")}
              >
                A-Z
              </div>
              <div
                className={`${
                  alphabet === "z-a" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] mb-1`}
                onClick={() => setAlphabet("z-a")}
              >
                Z-A
              </div>
            </div>
            <div className="bg-white w-[90%] md:w-[48%] h-[170px] md:h-[180px] mx-auto rounded-md flex-col flex items-center shadow-md border-[1px] border-[#367FA9]">
              <div className="text-[#1488DB] uppercase border-b-[3px] border-[#367FA9] h-[40px] flex items-center  justify-center font-bold w-full my-2 text-[18px]">
                Hiển thị số lần in
              </div>
              <div
                className={`${
                  sort === "all" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("all")}
              >
                Tất cả
              </div>
              <div
                className={`${
                  sort === "descending" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("descending")}
              >
                Giảm dần
              </div>
              <div
                className={`${
                  sort === "ascending" ? "rounded-sm bg-[#E6E6E6]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] mb-1`}
                onClick={() => setSort("ascending")}
              >
                Tăng dần
              </div>
            </div>
          </div>
          <div className=" w-[100%] mx-auto  md:h-[50px] rounded-lg flex items-end mt-3 justify-end gap-3">
            <button
              className="bg-gradient-to-br from-[#ff7d7d] outline-none to-[#b84949] shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[35%] md:w-[20%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
              onClick={cancelFilter}
            >
              Hủy
            </button>
            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 shadow-md border-[1px] hover:opacity-80 border-[#367FA9] p-[10px] w-[35%] md:w-[20%] block rounded-md text-[15px] md:text-[18px] font-semibold text-white"
              onClick={applyFilter}
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesFilterModal;
