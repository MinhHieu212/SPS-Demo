import React from "react";
import "./History.scss";
import { BinIcon, InfoIcon } from "../../Assets/Icons/Icons";
import ConfirmCancelModal from "../../Modals/ConfirmCancelModal";
import PrintingLogInfoModal from "../../Modals/PrintingLogInfoModal";

function HistoryItem(props) {
  return (
    <div className="HistoryItem flex flex-row justify-between items-center bg-[#E7E5E5] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-3 rounded-sm border-b-2 border-black ">
      <div className="truncate overflow-clip">{props.fileName}</div>
      <div className="text-center">{props.printerId}</div>
      <div className="text-center">{props.position}</div>
      <div className="text-center">{props.date}</div>
      <div className="text-center">{props.status}</div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <PrintingLogInfoModal>
          <InfoIcon />
        </PrintingLogInfoModal>
        <ConfirmCancelModal>
          <BinIcon />
        </ConfirmCancelModal>
      </div>
    </div>
  );
}
export default HistoryItem;
