import React from "react";

function ReportItem(props) {
  return (
    <div className="min-w-[800px] md:w-full max-h-[60px] ActivityItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
      {/* <div className="w-[25%] truncate overflow-clip">{props.studentName}</div> */}
      <div className="min-w-[10%] text-center">{props.time}</div>
      <div className="min-w-[15%] text-center">{props.id}</div>
      <div className="min-w-[25%] text-center">{props.location}</div>
      <div className="min-w-[10%] text-center">{props.frequency}</div>
      <div className="min-w-[15%] text-center">{props.a3}</div>
      <div className="min-w-[15%] text-center">{props.a4}</div>
      <div className="min-w-[10%] text-center">{props.maintenance}</div>
    </div>
  );
}

export default ReportItem;
