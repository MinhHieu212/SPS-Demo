import React, { useEffect, useState } from "react";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import "./ManageSpso.scss";
import ManageSpsoItem from "./ManageSpsoItem";
import { AddPrinterModal } from "../../Modals/AddPrinterModal/AddPrinterModal";
import { useNavigate } from "react-router";
import { FIlterManagePriterModal } from "../../Modals";
import { getPrintersList } from "../../APIs/SpsoAPI/SpsoAPI";
const printers = [
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Ngưng hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "12345678",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Ngưng hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Ngưng hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
  {
    id: "H03CS2",
    location: "CS2, H6, 311",
    date: "12-03-2022",
    queue: 18,
    status: "Hoạt động",
  },
];
const ManageSpso = () => {
  const [printersList, setPrintersList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const handleSPSOApi = async () => {
      const response = await getPrintersList();
      //console.log("reponse from get printers api: ", response);
      setPrintersList(response?.data?.data);
    }

    handleSPSOApi();

    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  const printers = printersList.printers
  //console.log(printers);
  
  return (
    <div className="Manage mx-auto max-w-[1280px] w-full px-[10px] lg:px-[20px] bg-[white] shadow-sm pb-5 min-h-[93vh]">
      <div className="flex flex-row mt-3 border-b-4 border-[#066DCC] pb-2 md:pb-3 mb-4 items-center justify-between">
        <h2 className="text-2xl lg:text-3xl font-semibold printing-title pb-2 md:pb-3 pt-2 text-[#066DCC] ">
          QUẢN LÝ HỆ THỐNG MÁY IN
        </h2>
        <div>
          <AddPrinterModal>
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
            <p className="text-base lg:text-xl w-[40%]">{printersList.totalPrinter}</p>
            <p className="text-base lg:text-xl w-[60%]">{printersList.activatedPrinter}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row gap-3 ">
          <div className="w-full lg:w-1/2 border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
            <input
              type="text"
              placeholder="Tìm theo ID sinh viên"
              className="w-full outline-none border-none"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="w-[100%] lg:w-1/2">
            <FIlterManagePriterModal>
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
          <div className="text-center w-[20%]">VỊ TRÍ</div>
          <div className="text-center w-[15%]"> KÍCH HOẠT</div>
          <div className="text-center w-[25%]">SỐ YÊU CẦU IN</div>
          <div className="w-[30%]">TRẠNG THÁI</div>
        </div>
        {printers?.map((printer, index) => (
          <ManageSpsoItem
            key={index}
            id={printer.printerId}
            location={printer.location.facility + ", " + printer.location.department + ", " + printer.location.room}
            date={printer.activatedTime.slice(0,10)}
            status={printer.status ? "Hoạt động" : "Không hoạt động"}
            queue = {printer.printingQueue.length + printer.printingJob.length}
            printingQueue = {[...printer.printingJob, ...printer.printingQueue]}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageSpso;
