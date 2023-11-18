import React from "react";
import "./Activities.scss";
import { ListIcon } from "../../Assets/Icons/Icons";
import { DetailPrinterLogModal } from "../../Modals";

function ActivityItem({ activity }) {
  return (
    <div className="min-w-[800px] md:w-full max-h-[60px] ActivityItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
      <div className=" w-[20%] truncate overflow-clip ">
        {activity.studentName}
      </div>
      <div className="text-center truncate overflow-clip  w-[15%]">
        {activity.studentId}
      </div>
      <div className=" w-[25%] truncate overflow-clip pl-3">
        {activity.major}
      </div>
      <div className="text-center truncate overflow-clip  w-[15%]">
        {activity.classes}
      </div>
      <div className=" w-[10%] text-center  truncate overflow-clip">
        {activity.history?.length || 12}
      </div>
      <div className=" flex justify-center w-[10%] truncate overflow-clip ">
        <DetailPrinterLogModal activity={activity}>
          <ListIcon></ListIcon>
        </DetailPrinterLogModal>
      </div>
    </div>
  );
}

export default ActivityItem;
