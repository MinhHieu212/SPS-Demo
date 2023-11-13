import React, { useState } from "react";

const ActivitiesFilterModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const Cs1_List = ["A1", "B2", "D1", "B1", "B4", "C7", "B3"];
  const Cs2_List = ["H1", "H2", "H3", "H6"];

  const [location1, setLocation1] = useState("all");
  const [location2, setLocation2] = useState("all");
  const [sort, setSort] = useState("");

  const cancelFilter = () => {
    setLocation1("all");
    setLocation2("all");
    setSort("");
    setOpen(false);
  };

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const applyFilter = () => {
    console.log({ location1, location2, sort, date1, date2 });
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
        <div className="content absolute z-10 top-[140%] right-0 h-[auto] p-3 bg-[#D9D9D9] rounded-lg min-h-[367px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-lg">
          <div className="absolute w-[20px] h-[20px] rotate-45 bg-[#D9D9D9] top-[-10px] right-[15px] "></div>
          <div className="flex-col flex md:flex-row items-end justify-center gap-3 mb-3">
            <div className="bg-white h-[170px] md:h-[200px] rounded-lg flex-col flex items-center shadow-lg w-[90%] gap-2 mx-auto md:w-[48%]">
              <div className="text-[#1488DB] border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Khoảng thời gian
              </div>
              <div className="flex items-center w-full px-3 justify-between">
                <span className="mr-2 text-[18px] font-bold">Từ</span>
                <input
                  onChange={(e) => setDate1(e.target.value)}
                  type="date"
                  className="pl-2 h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
              <div className="flex items-center w-full px-3 mt-[9px] justify-between">
                <span className="mr-2 text-[18px] font-bold">Đến</span>
                <input
                  type="date"
                  onChange={(e) => setDate2(e.target.value)}
                  className="pl-2 h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
            </div>
            <div className="bg-white h-[150px] md:h-[200px] rounded-lg flex-col flex items-center shadow-lg w-[90%] mx-auto md:w-[48%]">
              <div className="text-[#1488DB] border-b-[3px] text-[18px]  border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Lọc theo vị trí
              </div>
              <select
                className="border-b-[3px] border-gray h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[80%] my-2 outline-none "
                onChange={(e) => setLocation1(e.target.value)}
              >
                <option
                  value="all"
                  // selected
                  className="font-bold text-center border-b-2 border-gray"
                >
                  Cơ Sở 1
                </option>
                {Cs1_List.map((item, index) => (
                  <option
                    value={item}
                    key={index}
                    className="font-bold text-center border-b-[3px]"
                  >
                    {item}
                  </option>
                ))}
              </select>
              <select
                className="border-b-[3px] border-gray h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[80%] my-2 outline-none"
                onChange={(e) => setLocation2(e.target.value)}
              >
                <option
                  value="all"
                  // selected
                  className="font-bold text-center border-b-2 border-gray"
                >
                  Cơ Sở 2
                </option>
                {Cs2_List.map((item, index) => (
                  <option
                    value={item}
                    key={index}
                    className="font-bold text-center border-b-2 border-gray"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-end justify-center gap-3 md:flex-row flex-col">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[150px] rounded-lg flex-col flex items-center shadow-lg">
              <div className="text-[#1488DB] text-[18px]  border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2">
                Sắp xếp theo thời gian
              </div>
              <div
                className={`${
                  sort === "Gan nhat" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("Gan nhat")}
              >
                Mới nhất
              </div>
              <div
                className={`${
                  sort === "Lau nhat" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setSort("Lau nhat")}
              >
                Cũ nhất
              </div>
            </div>
            <div className=" w-[90%] mx-auto md:w-[48%] md:h-[150px] rounded-lg flex items-end justify-center gap-3">
              <button
                className="bg-[#78A3AD] p-[10px] w-[40%] block rounded-lg text-[15px] md:text-[18px] font-semibold text-white"
                onClick={cancelFilter}
              >
                Hủy
              </button>
              <button
                className="bg-[#066DCC] p-[10px] w-[40%] block rounded-lg text-[15px] md:text-[18px] font-semibold text-white"
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
