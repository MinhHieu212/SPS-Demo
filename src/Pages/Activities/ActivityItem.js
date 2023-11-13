import React from "react";
import "./Activities.scss";
import { InfoIcon } from "../../Assets/Icons/Icons";

function ActivityItem(props) {
  return (
    <div className="ActivityItem flex flex-row justify-between items-center bg-[#E7E5E5]    text-[16px] lg:text-[20px] font-bold py-3 px-4 mt-3 rounded-sm border-b-2 border-black  w-[714px]  md:w-full">
      <div className="w-[25%] truncate overflow-clip">{props.studentName}</div>
      <div className="text-center w-[20%]">{props.studentId}</div>
      <div className="text-center w-[10%]">{props.printerId}</div>
      <div className="text-center w-[20%]">{props.location}</div>
      <div className="text-center w-[15%]">{props.date}</div>
      <div className="w-[10%] flex items-center justify-center gap-2">
        <InfoIcon></InfoIcon>
      </div>
    </div>
  );
}

export default ActivityItem;
