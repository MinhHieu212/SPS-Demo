import React, { useEffect, useState } from "react";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import "./ManageSpso.scss";
import ManageSpsoItem from "./ManageSpsoItem";
import { AddPrinterModal } from "../../Modals/AddPrinterModal/AddPrinterModal";
import { useNavigate } from "react-router";
import { FIlterManagePriterModal } from "../../Modals";
import { getPrintersList, addPrinter } from "../../APIs/SpsoAPI/SpsoAPI";
import { value } from "../../Modals/FIlterManagePriterModal/FIlterManagePriterModal";
import { newPrinter } from "../../Modals/AddPrinterModal/AddPrinterModal";
import { PrintersData } from "./FixedData";
import { useSocket } from "../../Contexts/SocketIOContenxt";

const ManageSpso = () => {
  const [printersList, setPrintersList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [renderList, setRenderList] = useState(true);
  let params = {};
  const navigate = useNavigate();
  const socket = useSocket();

  const handleSPSOApi = async (params) => {
    const response = await getPrintersList(params);
    setPrintersList(response?.data?.data);
  };

  const fetchDataAndUpdate = async () => {
    await handleSPSOApi(params);
  };

  useEffect(() => {
    params = {};
    if (value.status === "all") delete params.status;
    else if (value.status === "enable") params.status = 1;
    else params.status = 0;

    if (value.location === "all") delete params.facility;
    else if (value.location === "cs1") params.facility = "CS1";
    else if (value.location === "cs2") params.facility = "CS2";
    else params.facility = "100";

    if (value.timeActive === "ascending") params.sortDirection = "1";
    else params.sortDirection = "-1";
    params.searchField = value.searchField;
    handleSPSOApi(params);
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList]);

  socket.on("update-printer-list", () => {
    console.log("Received update-printer-list signal");
    fetchDataAndUpdate();
  });

  const printers = printersList.printers;

  return (
    <div className="Manage mx-auto max-w-[1280px] w-full px-[10px] lg:px-[20px] bg-[white] shadow-sm pb-5 min-h-[93vh]">
      <div className="flex flex-row mt-3 border-b-4 border-[#066DCC] pb-2 md:pb-3 mb-4 items-center justify-between">
        <h2 className="text-2xl lg:text-3xl font-semibold printing-title pb-2 md:pb-3 pt-2 text-[#066DCC] ">
          QUẢN LÝ HỆ THỐNG MÁY IN
        </h2>
        <div>
          <AddPrinterModal
            functionRenderList={() => setRenderList(!renderList)}
          >
            <button className="text-[14px] lg:text-[18px] text-white bg-[#3C8DBC] font-semibold md:px-[30px] px-[5px] mf:px-[10px] py-2 rounded-md">
              Thêm máy in
            </button>
          </AddPrinterModal>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row mt-3 items-start manageSPSO-outer-flex">
        <div className="w-full md:w-1/2 lg:w-1/3 relative shadow-lg rounded-md overflow-hidden">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[10px] rou">
            <p className="text-base lg:text-xl w-[40%]">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-[60%]">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-[40%]">
              {printersList.totalPrinter || 0}
            </p>
            <p className="text-base lg:text-xl w-[60%]">
              {printersList.activatedPrinter || 0}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row gap-3 ">
          <div className="w-full lg:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID máy in"
              className="w-full outline-none border-none"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div
              onClick={(e) => {
                setRenderList(!renderList);
                value.searchField = inputValue;
              }}
            >
              <SearchIcon></SearchIcon>
            </div>
          </div>
          <div className="w-[100%] lg:w-1/2">
            <FIlterManagePriterModal
              functionRenderList={() => setRenderList(!renderList)}
            >
              <div className=" border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
                <input
                  type="text"
                  placeholder="Lọc máy in"
                  readOnly
                  className="w-full outline-none border-none"
                />
                <FilterIcon></FilterIcon>
              </div>
            </FIlterManagePriterModal>
          </div>
        </div>
      </div>
      <div className=" w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px]  flex flex-row mx-auto justify-between shadow-lg items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
          <div className="text-center w-[10%]">ID MÁY IN</div>
          <div className="w-[15%] text-center">TRẠNG THÁI</div>
          <div className="text-center w-[14%]">VỊ TRÍ</div>
          <div className="text-center w-[15%]"> KÍCH HOẠT</div>
          <div className="text-center w-[9%]">ĐANG ĐỢI</div>
          <div className="text-center w-[23%]">YÊU CẦU IN</div>
          <div className="w-[14%] text-center">THIẾT LẬP</div>
        </div>
        {printers
          ? printers?.map((printer, index) => (
              <ManageSpsoItem
                functionRenderList={() => setRenderList(!renderList)}
                model={printer.model}
                description={printer.description}
                brand={printer.brand}
                key={index}
                id={printer.printerId}
                location={
                  printer.location.facility +
                  ", " +
                  printer.location.department +
                  ", " +
                  printer.location.room
                }
                date={printer.activatedTime.slice(0, 10)}
                status={printer.status ? "Hoạt động" : "Không hoạt động"}
                queue={printer.printingQueue.length}
              />
            ))
          : PrintersData?.map((printer, index) => (
              <ManageSpsoItem
                functionRenderList={() => setRenderList(!renderList)}
                model={printer.model}
                description={printer.description}
                brand={printer.brand}
                key={index}
                id={printer.printerId}
                location={
                  printer.location.facility +
                  ", " +
                  printer.location.department +
                  ", " +
                  printer.location.room
                }
                date={printer.activatedTime.slice(0, 10)}
                status={printer.status ? "Hoạt động" : "Không hoạt động"}
                queue={printer.printingQueue.length}
              />
            ))}
      </div>
    </div>
  );
};

export default ManageSpso;
