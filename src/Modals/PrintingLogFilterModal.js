import React, { useState } from "react";

const PrintingLogFilterModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const Cs1_List = ["A1", "B2", "D1", "B1", "B4", "C7", "B3"];
  const Cs2_List = ["H1", "H2", "H3", "H6"];

  const [state, setState] = useState("");
  const [location1, setLocation1] = useState("all");
  const [location2, setLocation2] = useState("all");
  const [sort, setSort] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const cancelFilter = () => {
    setState("");
    setLocation1("all");
    setLocation2("all");
    setSort("");
    setDate1("");
    setDate2("");
    setOpen(false);
  };

  const applyFilter = () => {
    console.log({ state, location1, location2, sort, date1, date2 });
  };

  return (
    <div className="Wrapper relative z-10">
      <div className="Trigger" onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div className="content absolute z-10 top-[140%] right-0 h-[auto] p-3 bg-[#D9D9D9] rounded-lg min-h-[367px] w-[300px] md:w-[570px] text-[15px] md:text-[18px] shadow-md">
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
                  className="border-b-[3px] border-gray pl-2 h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
              <div className="flex items-center w-full px-3 mt-[9px] justify-between">
                <span className="mr-2 text-[18px] font-bold">Đến</span>
                <input
                  type="date"
                  onChange={(e) => setDate2(e.target.value)}
                  className="border-b-[3px] border-gray pl-2 h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[75%] outline-none"
                />
              </div>
            </div>
            <div className="bg-white  h-[170px] md:h-[200px] rounded-lg flex-col flex items-center shadow-lg w-[90%] mx-auto md:w-[48%]">
              <div className="text-[#1488DB] border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Lọc theo vị trí
              </div>
              <select
                className="border-b-[3px] border-gray h-[40px] bg-[#D9D9D9] flex items-center justify-center font-semibold w-[80%] my-2 outline-none "
                onChange={(e) => setLocation1(e.target.value)}
              >
                <option
                  value="all"
                  className="font-bold text-center border-b-2 border-gray"
                  selected
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
                  selected
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
          <div className="flex items-start justify-center gap-3 md:flex-row flex-col">
            <div className="bg-white w-[90%] mx-auto md:w-[48%] h-[170px] md:h-[220px] rounded-lg flex-col flex items-center shadow-lg">
              <div className="text-[#1488DB] border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                Trạng thái
              </div>
              <div
                className={`${
                  state === "Da in" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setState("Da in")}
              >
                Đã in
              </div>
              <div
                className={`${
                  state === "Da huy" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setState("Da huy")}
              >
                Đã hủy
              </div>
              <div
                className={`${
                  state === "Dang in" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setState("Dang in")}
              >
                Đang in
              </div>
              <div
                className={`${
                  state === "Dang doi" ? "rounded-sm bg-[#D9D9D9]" : ""
                } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                onClick={() => setState("Dang doi")}
              >
                Đang đợi
              </div>
            </div>

            <div className="w-[100%] md:w-[48%] flex flex-col gap-3">
              <div className="bg-white w-[90%]  h-[120px] md:h-[170px] mx-auto rounded-lg flex-col flex items-center shadow-lg">
                <div className="text-[#1488DB] border-b-[3px] border-black h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                  Sắp xếp theo
                </div>
                <div
                  className={`${
                    sort === "Moi nhat" ? "rounded-sm bg-[#D9D9D9]" : ""
                  } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%]`}
                  onClick={() => setSort("Moi nhat")}
                >
                  Mới nhất
                </div>
                <div
                  className={`${
                    sort === "Cu nhat" ? "rounded-sm bg-[#D9D9D9]" : ""
                  } border-b-[3px] cursor-pointer border-gray h-[40px] flex items-center justify-center font-semibold w-[80%] mb-1`}
                  onClick={() => setSort("Cu nhat")}
                >
                  Cũ nhất
                </div>
              </div>
              <div className="Buttoms flex mx-auto w-[90%] mt-1 md:mt-3 items-center justify-end gap-3 pr-2">
                <button
                  className="bg-[#78A3AD] p-[10px] block rounded-lg text-[15px] md:text-[18px]  w-[100px]  font-semibold text-white"
                  onClick={cancelFilter}
                >
                  Hủy
                </button>
                <button
                  className="bg-[#066DCC] p-[10px]  block rounded-lg text-[15px] md:text-[18px] w-[100px] font-semibold text-white"
                  onClick={applyFilter}
                >
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintingLogFilterModal;
