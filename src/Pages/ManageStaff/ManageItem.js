import React from "react";
import "./Manage.scss";

import {
  DetailPrinterLogModal,
  PrinterInfoAndConfigModal,
  PrinterQueueModal,
} from "../../Modals";

function ManageItem(props) {
  return (
    <div className="ManageItem flex flex-row justify-between items-center bg-[#E7E5E5] text-[16px] lg:text-[20px] font-bold py-[12px] px-4 mt-2 rounded-md border-b-2 border-black w-[714px] md:w-full">
      <div className="min-w-[10%]">{props.id}</div>
      <div className="min-w-[35%] flex flex-row   items-center justify-center gap-4 px-5">
        <p>{props.queue}</p>
        <PrinterQueueModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="min-w-[20%] flex justify-center items-center">
        <DetailPrinterLogModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
            Lịch sử
          </button>
        </DetailPrinterLogModal>
      </div>
      <div className="min-w-[30%] flex items-center justify-between p-0 md:p-3">
        {props.status}
        <PrinterInfoAndConfigModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-sm">
            Tùy chỉnh
          </button>
        </PrinterInfoAndConfigModal>
      </div>
    </div>
  );
}

export default ManageItem;
