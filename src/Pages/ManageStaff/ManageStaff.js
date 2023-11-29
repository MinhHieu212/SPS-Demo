import React, { useState, useEffect } from "react";
import "./Manage.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ManageItem from "./ManageItem";
import { useNavigate } from "react-router";
import { FIlterManagePriterModal } from "../../Modals";
import { getPrintersList, editPrinter } from "../../APIs/StaffAPI/StaffAPI";
import { value } from "../../Modals/FIlterManagePriterModal/FIlterManagePriterModal";
import { newData } from "../../Modals/SPSO_EditPrinter/SPSO_EditPrinter";


const ManageStaff = () => {
  const [printersList, setPrintersList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [renderList, setRenderList] = useState(true);
  const [renderList1, setRenderList1] = useState(true);
  const [renderList2, setRenderList2] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, []);

  useEffect(() => {
    const handleStaffApi = async (params) => {
      const response = await getPrintersList(params);
      console.log("reponse from get printers LOCAL api: ", response?.data?.data);
      setPrintersList(response?.data?.data);
    };
    const params = {};
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
    handleStaffApi(params);
    console.log(params);
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList]);

  useEffect(() => {
    const handleEditAPI = async (newData) => {
      const request = await editPrinter(newData);
      setRenderList(!renderList);
    };
    handleEditAPI(newData);
  }, [renderList1]);
  console.log(printersList);
  const printers = printersList.printers;


  return (
    <div className="Manage History max-w-[1280px] px-[10px] md:w-full lg:px-[20px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3 printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3  text-[#066DCC] ">
        QUẢN LÝ MÁY IN
      </h2>
      <div className="flex flex-col-reverse md:flex-row mt-4 items-start justify-between ">
        <div className="w-full md:w-[40%] flex flex-col justify-center  relative shadow-md rounded-md overflow-hidden">
          <div className="bg-[#3C8DBC] text-white text-xl font-bold flex flex-row justify-center items-center text-center py-[14px] px-[8px]">
            <p className="text-base lg:text-xl w-[40%]">TỔNG SỐ</p>
            <p className="text-base lg:text-xl w-[60%]">ĐANG HOẠT ĐỘNG</p>
          </div>
          <div className="bg-white flex flex-row text-base font-bold justify-center items-center text-center py-[14px]">
            <p className="text-base lg:text-xl w-1/2">{printersList.totalPrinter || 0}</p>
            <p className="text-base lg:text-xl w-1/2">{printersList.activatedPrinter || 0}</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex mb-3 items-start justify-between relative">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-full lg:w-[100%] border block border-black"
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
      </div>
      <div className="w-full overflow-x-auto">
        <div className="text-white flex flex-row justify-between items-center bg-[#3C8DBC] text-base lg:text-lg shadow-lg font-bold py-3 px-4 mt-8 rounded-sm min-w-[800px] md:w-full max-h-[60px]">
          <div className="  min-w-[10%]">ID MÁY IN</div>
          <div className="text-center min-w-[35%]">SỐ YÊU CẦU IN</div>
          <div className="text-center  min-w-[20%]">LỊCH SỬ IN</div>
          <div className=" min-w-[30%]">TRẠNG THÁI</div>
        </div>
        {/* {printers && printers.map((printer) => (
          <ManageItem
            id={printer.id}
            queue={printer.queue}
            status={printer.status}
          />
        ))} */}
        {printers?.map((printer, index) => (
          <ManageItem
            functionRenderList1={() => setRenderList1(!renderList1)}
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

export default ManageStaff;
