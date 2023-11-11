import React from "react";
import "./Manage.scss";
import PrintingRequestModal from "../../Modals/PrintingRequestModal";
import PrintingLogModal from "../../Modals/PrintingLogModal";
import ModifyPrinterInfoModal from "../../Modals/ModifyPrinterInfoModal";
function ManageItem(props) {
  return (
    <div className="ManageItem flex flex-row justify-between items-center bg-[#E7E5E5] text-[16px] md:text-[20px] font-bold py-2 px-4 mt-3 rounded-sm border-b-2 border-black w-[714px] md:w-full">
      <div className="min-w-[10%]">{props.id}</div>
      <div className="min-w-[30%] flex flex-row   items-center justify-center gap-4 px-5">
        <p>{props.queue}</p>
        <PrintingRequestModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
            Chi tiết
          </button>
        </PrintingRequestModal>
      </div>
      <div className="min-w-[25%] flex justify-center items-center">
        <PrintingLogModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
            Lịch sử
          </button>
        </PrintingLogModal>
      </div>
      <div className="min-w-[30%] flex items-center justify-between p-0 md:p-3">
        {props.status}
        <ModifyPrinterInfoModal>
          <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-sm">
            Tùy chỉnh
          </button>
        </ModifyPrinterInfoModal>
      </div>
    </div>
  );
}

export default ManageItem;
