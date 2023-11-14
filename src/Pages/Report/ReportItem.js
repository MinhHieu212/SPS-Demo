import React from "react";

function ReportItem(props) {
  return (
    <div className="ReportItem flex flex-row justify-between items-center bg-[#E7E5E5] text-[16px] md:text-[20px] font-bold py-3  px-4 mt-2  rounded-md border-b-2 border-black min-w-[714px] md:w-full">
      <div className="min-w-[15%] text-center">{props.time}</div>
      <div className="min-w-[15%] text-center">{props.id}</div>
      <div className="min-w-[15%] text-center">{props.location}</div>
      <div className="min-w-[15%] text-center">{props.frequency}</div>
      <div className="min-w-[15%] text-center">{props.a3}</div>
      <div className="min-w-[15%] text-center">{props.a4}</div>
      <div className="min-w-[10%] text-center">{props.maintenance}</div>
    </div>
  );
}

export default ReportItem;
