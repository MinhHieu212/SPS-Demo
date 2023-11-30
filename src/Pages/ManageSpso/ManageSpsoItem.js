import React, { useState } from "react";
import { PrinterQueueModal } from "../../Modals";
import SPSOEditPrinterModal from "../../Modals/SPSO_EditPrinter/SPSO_EditPrinter";
import { getPrinterQueue, getPrinterLog } from "../../APIs/SpsoAPI/SpsoAPI";
import DetailPrinterLogModal from "../../Modals/DetailPrinterLogModal/DetailPrinterLogModal";
import { ManageSPSOItem } from "../../Utils/Skeleton";

function ManageSpsoItem(props) {
  const [printerQueue, setPrinterQueue] = useState([]);

  const handleGetQueue = async (id) => {
    const response = await getPrinterQueue(id);
    setPrinterQueue(response?.data?.data.printingQueue);
  };



  const handleSubmit = (id) => {
    handleGetQueue({ printerId: id });
  };

  const [printerLog, setPrinterLog] = useState([]);

  const handleGetLog = async (params) => {
    const response = await getPrinterLog(params);
    setPrinterLog(response?.data?.data?.printingLog);
  }
  return (
    <>
      {props.id !== "" ? (
        <div className="ManageSpsoItem flex flex-row justify-between items-center bg-[#ffffff] shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
          <div className=" text-center w-[10%]">{props.id}</div>
          <div className=" text-center w-[15%]">
            <p
              className={`w-[100%] overflow-hidden ${
                props.status == "Hoạt động" ? "text-[blue]" : "text-[red]"
              }`}
            >
              {props.status}
            </p>
          </div>
          <div className=" text-center w-[14%]">{props.location}</div>
          <div className=" text-center w-[15%]">{props.date}</div>
          <div className=" text-center w-[9%]">
            <span className="w-[30px] text-[blue] text-center ">
              {props.queue}
            </span>
          </div>
          <div className=" w-[23%] flex flex-row justify-center items-center gap-2">
            <PrinterQueueModal queue={printerQueue} printerId={props.id}>
              <button
                onClick={(e) => handleSubmit(props.id)}
                className="middle none center rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Hiện tại
              </button>
            </PrinterQueueModal>
            <DetailPrinterLogModal printerLogs={printerLog} id={props.id} cbGetLog={(params) => handleGetLog(params)}>
              <button
                onClick={(e) => handleGetLog({printerId: props.id })}
                className="middle none center  rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Lịch sử
              </button>
            </DetailPrinterLogModal>
          </div>
          <div className="w-[14%] flex flex-row justify-between px-0 md:px-2 items-center">
            <div className="overflow-hidden px-1  mx-auto ">
              <SPSOEditPrinterModal
                printerLocation={props.location}
                printerId={props.id}
                printerStatus={
                  props.status === "Hoạt động" ? "enable" : "disable"
                }
                description={props.description}
                brand={props.brand}
                model={props.model}
                location={props.location}
                functionRenderList1={props.functionRenderList1}
                functionRenderList={props.functionRenderList}
              >
                <button className="middle none center mx-auto rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Cấu hình
                </button>
              </SPSOEditPrinterModal>
            </div>
          </div>
        </div>
      ) : (
        <ManageSPSOItem></ManageSPSOItem>
      )}
    </>
  );
}

export default ManageSpsoItem;
