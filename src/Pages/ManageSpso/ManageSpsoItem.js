import React from "react";
import { PrinterQueueModal } from "../../Modals";

function ManageSpsoItem(props) {
  return (
    <div className="ManageSpsoItem flex flex-row justify-between items-center bg-[#E7E5E5] text-[16px] lg:text-[20px] font-bold  py-[12px] px-4 mt-2 rounded-md border-b-2 border-black w-[714px] md:w-full">
      <div className=" text-center w-[10%]">{props.id}</div>
      <div className=" text-center w-[20%]">{props.location}</div>
      <div className=" text-center w-[15%]">{props.date}</div>
      <div className=" w-[25%] flex flex-row justify-center items-center gap-4">
        <span>{props.queue}</span>
        <PrinterQueueModal>
          <button class="bg-[#c7c7c7] block hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-sm">
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="w-[30%] flex flex-row justify-between px-0 md:px-2 items-center">
        <p className="w-[60%] overflow-hidden ">{props.status}</p>
        <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded-sm w-[40%] ">
          Tùy chỉnh
        </button>
      </div>
    </div>
  );
}

export default ManageSpsoItem;
