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
          <button class="bg-[#d9d9d9] block hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-sm">
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
            <button class="bg-[#d9d9d9] hover:bg-gray-500 text-gray-800 font-semibold py-1 px-2  rounded-sm w-full">
              Tùy chỉnh
            </button>
          </SPSOEditPrinterModal>
        </div>
      </div>
    </div>
  );
}

export default ManageSpsoItem;
