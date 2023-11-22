import React, { useEffect, useState } from "react";
import "./History.scss";
import HistoryItem from "./HistoryItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import { FilterHistoryModal } from "../../Modals";
import { useNavigate } from "react-router-dom";
import { filterHistory } from "../../APIs/HistoryAPI/HistoryAPI";

const History = () => {
  const navigate = useNavigate();
  const [historyLogs, setHistoryLogs] = useState([]);
  const [totalPages, setTotalPages] = useState({ A3: 0, A4: 0 });
  const [filterParams, setFilterParams] = useState({});
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    const handleCallAPI = async () => {
      const response = await filterHistory(filterParams);

      const pages = {
        A3: response.data.printedA3 || 0,
        A4: response.data.printedA4 || 0,
      };

      setTotalPages(pages);

      setHistoryLogs(response?.data?.printingLogs || []);
    };

    handleCallAPI();

    console.log("Refresh API");

    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [filterParams]);

  const handleSearch = () => {
    console.log("Search input", searchParams);
    setFilterParams((filterParams) => {
      return { ...filterParams, ["searchField"]: searchParams };
    });
    console.log("filterParams", filterParams);
  };

  return (
    <div className="History max-w-[1280px] w-full px-[10px] lg:px-[20px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3 printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3 text-[#066DCC] ">
        LỊCH SỬ HOẠT ĐỘNG
      </h2>
      <div className="flex flex-col md:flex-row mt-3 wrapper items-center">
        <div className="w-full md:w-[40%] rounded-md overflow-hidden relative shadow-lg">
          <div className="bg-[#3C8DBC] text-white text-center text-[16px] lg:text-[18px font-bold title-wrapper">
            TỔNG SỐ TRANG ĐÃ IN
          </div>

          <div className="bg-white flex flex-row text-[16px] lg:text-[18px] font-bold ">
            <div className="w-1/2 py-3 text-center">
              <span className="text-[16px] lg:text-[18px] text-[#3C8DBC] mr-2">
                Size A4:
              </span>
              <span text-center className="text-[16px] lg:text-[18px]">
                {totalPages.A4}
              </span>
            </div>

            <div className="w-1/2  py-3 text-center">
              <span className="text-[16px] lg:text-[18px] text-[#3C8DBC] mr-2">
                Size A3:
              </span>
              <span className="text-[16px] lg:text-[18px]">
                {totalPages.A3}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[60%] gap-2 mt-3 md:mt-0">
          <div className="w-full border h-[50px] border-black rounded-md flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID máy in"
              className="w-[90%] outline-none border-none"
              onInput={(e) => setSearchParams(e.target.value)}
            />
            <div onClick={handleSearch}>
              <SearchIcon></SearchIcon>
            </div>
          </div>
          <div className="w-full">
            <FilterHistoryModal
              handleChangeParams={(params) => setFilterParams(params)}
            >
              <div className="w-full cursor-pointer border h-[50px] border-black rounded-md flex items-center justify-between pr-3 bg-white">
                <span className="mx-3 text-[gray]">Lọc kết quả</span>
                <FilterIcon></FilterIcon>
              </div>
            </FilterHistoryModal>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px] text-white flex flex-row justify-between items-center bg-[#3C8DBC]  text-[16px] lg:text-[18px] lg:text-lg font-bold py-3 px-4 mt-8 rounded-sm">
          <div className="w-[25%]">TÊN FILE</div>
          <div className="text-center w-[15%]">ID MÁY IN</div>
          <div className="text-center w-[15%]">VỊ TRÍ</div>
          <div className="text-center w-[15%]">NGÀY IN</div>
          <div className="text-center w-[15%]">TRẠNG THÁI</div>
          <div className="text-center w-[15%]">TÙY CHỌN</div>
        </div>
        {historyLogs.map((historyLog, index) => (
          <HistoryItem
            fileName={historyLog?.document?.title}
            printerId={historyLog?.printerId}
            position={
              historyLog?.printers[0]?.location?.facility +
                ", " +
                historyLog?.printers[0]?.location?.department +
                ", " +
                historyLog?.printers[0]?.location?.room || "null"
            }
            date={historyLog?.createdAt.split("T")[0]}
            status={historyLog?.status}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
