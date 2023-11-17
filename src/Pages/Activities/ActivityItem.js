import React from "react";
import "./Activities.scss";
import { InfoIcon } from "../../Assets/Icons/Icons";
import { DetailActivityModal } from "../../Modals";

function ActivityItem(props) {
  return (
    <div className="min-w-[800px] md:w-full max-h-[60px] ActivityItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
      <div className="w-[25%] truncate overflow-clip">{props.studentName}</div>
      <div className="text-center w-[15%]">{props.studentId}</div>
      <div className="text-center w-[15%]">{props.printerId}</div>
      <div className="text-center w-[20%]">{props.location}</div>
      <div className="text-center w-[15%]">{props.date}</div>
      <div className="w-[10%] flex items-center justify-center gap-2">
        <DetailActivityModal>
          <InfoIcon></InfoIcon>
        </DetailActivityModal>
      </div>
    </div>
  );
}

export default ActivityItem;
