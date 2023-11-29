import React, { useEffect, useState } from "react";
import "./Manage.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ManageItem from "./ManageItem";
import { useNavigate } from "react-router";
import { getPtr, editPtr } from "../../APIs/StaffAPI/StaffAPI";
import { newPtr } from "../../Modals/PrinterInfoAndConfigModal/PrinterInfoAndConfigModal";
const ManageStaff = () => {
  const [renderList, setRenderList] = useState(true);
  const [renderList1, setRenderList1] = useState(true);
  const [data, setData] = useState([]);
  const [printerID, setPrinterID] = useState("");
  const [searchID, setSearchID] = useState("");
  const [printers, setPrinters] = useState([]);
  const [fileType, setFileType] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleEditAPI = async (newData) => {
      const request = await editPtr(newData);
      setRenderList(!renderList);
    };
    console.log(newPtr);
    handleEditAPI(newPtr);
  }, [renderList1])
  useEffect(() => {
    const handleGetPtr = async (params) => {
      const response = await getPtr(params);
      setData(response?.data?.data);
      setPrinters(response?.data?.data?.printers);
      setFileType(response?.data?.data?.currentFileType);
    }
    handleGetPtr({ searchField: searchID });

    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList]);

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
            <p className="text-base lg:text-xl w-1/2">{data.totalPrinter}</p>
            <p className="text-base lg:text-xl w-1/2">{data.activatedPrinter}</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex mb-3 items-start justify-between relative">
          <input
            type="text"
            placeholder="Tìm theo ID máy in"
            className="w-full lg:w-[100%] border block border-black"
            onChange={(e) => setPrinterID(e.target.value)}
          />
          <div className="absolute right-[3%] bottom-1/2 translate-y-1/2">
            <div onClick={(e) => {setSearchID(printerID); setRenderList(!renderList)}}><SearchIcon></SearchIcon></div>
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
        {printers?.map((printer) => (
          <ManageItem
            functionRenderList1={() => setRenderList1(!renderList1)}
            id={printer.printerId}
            queue={printer.printingJob.length + printer.printingQueue.length}
            status={printer.status === 1 ? "Hoạt động" : "Không hoạt động"}
            description = {printer.description}
            brand={printer.brand}
            model={printer.model}
            fileType={fileType}
            setRenderList = {() => setRenderList(!renderList)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageStaff;
