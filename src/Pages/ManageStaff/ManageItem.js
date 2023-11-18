import React from "react";
import "./Manage.scss";

import {
  DetailPrinterLogModal,
  PrinterInfoAndConfigModal,
  PrinterQueueModal,
} from "../../Modals";

function ManageItem(props) {
  return (
    <div className="ManageItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
      <div className="min-w-[10%]">{props.id}</div>
      <div className="min-w-[35%] flex flex-row   items-center justify-center gap-4 px-5">
        <p>{props.queue}</p>
        <PrinterQueueModal>
          <button className="middle none center mr-4 rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="min-w-[20%] flex justify-center items-center">
        <DetailPrinterLogModal>
          <button className="middle none center mr-4 rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Lịch sử
          </button>
        </DetailPrinterLogModal>
      </div>
      <div className="min-w-[30%] flex items-center justify-between p-0 md:p-3">
        {props.status}
        <PrinterInfoAndConfigModal>
          <button className="middle none center mr-4 rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Tùy chỉnh
          </button>
        </PrinterInfoAndConfigModal>
      </div>
    </div>
  );
}

export default ManageItem;
