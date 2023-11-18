import React from "react";
import { PrinterQueueModal } from "../../Modals";
import SPSOEditPrinterModal from "../../Modals/SPSO_EditPrinter/SPSO_EditPrinter";
function ManageSpsoItem(props) {
  return (
    <div className="ManageSpsoItem flex flex-row justify-between items-center bg-[#ffffff] shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
      <div className=" text-center w-[10%]">{props.id}</div>
      <div className=" text-center w-[20%]">{props.location}</div>
      <div className=" text-center w-[15%]">{props.date}</div>
      <div className=" w-[25%] flex flex-row justify-center items-center gap-4">
        <span>{props.queue}</span>
        <PrinterQueueModal>
          <button className="middle none center mr-4 rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="w-[30%] flex flex-row justify-between px-0 md:px-2 items-center">
        <p
          className={`w-[60%] overflow-hidden ${
            props.status == "Hoạt động" ? "text-[blue]" : "text-[red]"
          }`}
        >
          {props.status}
        </p>
        <div className="overflow-hidden px-1">
          <SPSOEditPrinterModal>
            <button className="middle none center mr-4 rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Cấu hình
            </button>
          </SPSOEditPrinterModal>
        </div>
      </div>
    </div>
  );
}

export default ManageSpsoItem;
