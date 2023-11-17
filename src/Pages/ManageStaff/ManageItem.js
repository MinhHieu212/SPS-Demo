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
          <button class="bg-[#d7d7d7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-sm">
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="min-w-[20%] flex justify-center items-center">
        <DetailPrinterLogModal>
          <button class="bg-[#d7d7d7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-sm">
            Lịch sử
          </button>
        </DetailPrinterLogModal>
      </div>
      <div className="min-w-[30%] flex items-center justify-between p-0 md:p-3">
        {props.status}
        <PrinterInfoAndConfigModal>
          <button class="bg-[#d7d7d7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-sm">
            Tùy chỉnh
          </button>
        </PrinterInfoAndConfigModal>
      </div>
    </div>
  );
}

export default ManageItem;
