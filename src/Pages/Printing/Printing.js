import React, { useEffect, useState } from "react";
import "./Printing.scss";
import PrintingItem from "./PrintingItem";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import { FilterPrinterModal } from "../../Modals";
import { useNavigate } from "react-router-dom";
import { async } from "q";
import { getPrinterList } from "../../APIs/PrintersAPI/PrintersAPI";

const Printing = () => {
  const navigate = useNavigate();
  const [printerList, setPrinterList] = useState([]);
  const [filterParams, setFilterParams] = useState({ per_page: 100 });
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }

    const callAPI = async () => {
      const response = await getPrinterList({ ...filterParams, per_page: 100 });
      console.log("Response from get printer lisr api : ", response);
      setPrinterList(response?.data?.printers);
    };

    callAPI();
  }, [filterParams]);

  const handleSearch = () => {
    setFilterParams((filterParams) => {
      return { ...filterParams, ["searchField"]: searchParams };
    });
  };

  return (
    <div className="Printing w-full px-[10px] max-w-[1280px] bg-[white] shadow-sm  lg:px-[20px] mx-auto pb-10 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3 printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3 text text-[#066DCC] ">
        CHỌN MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row mt-4 gap-3 ">
        <div className="w-full md:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
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
        <div className="w-full md:w-1/2">
          <FilterPrinterModal setParams={(params) => setFilterParams(params)}>
            <div className="w-full cursor-pointer border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
              <span className="mx-3 text-[gray]">Lọc kết quả</span>
              <FilterIcon></FilterIcon>
            </div>
          </FilterPrinterModal>
        </div>
      </div>
      <hr className="sm-hr mt-4" />
      {printerList.map((printer, index) => (
        <PrintingItem
          id={printer.printerId}
          base={printer?.location?.facility}
          building={printer?.location?.department}
          room={printer?.location?.room}
          status={printer.status === 1 ? "Hoạt động" : "Ngưng hoạt động"}
          request={printer.waiting_amount}
          key={index}
        ></PrintingItem>
      ))}
    </div>
  );
};

export default Printing;
