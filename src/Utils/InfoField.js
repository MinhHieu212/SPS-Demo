import React from "react";

const InfoField = ({ fieldName, fieldValue }) => {
  return (
    <div className="mb-2 ">
      <span className="text-[#066DCC] text-[16px] md:text-[20px] font-bold mr-3">
        {fieldName}:
      </span>
      <span className="text-[16px] md:text-[20px] font-semibold leading-7">
        {fieldValue}
      </span>
    </div>
  );
};

export const InfoField2 = ({ fieldName, fieldValue }) => {
  return (
    <div className="px-3 md:px-5 mb-1 text-[16px] md:text-[20px] flex items-center gap-3 w-full">
      <span className="text-[#066DCC] text-[16px] md:text-[20px]  font-bold w-[40%]">
        {fieldName}:
      </span>
      <span className="text-[16px] md:text-[20px] font-semibold leading-7 truncate overflow-clip w-[60%]">
        {fieldValue}
      </span>
    </div>
  );
};

export const InfoFieldStatus = ({ fieldName, fieldValue }) => {
  return (
    <div className="px-3 md:px-5 mb-1 text-[16px] md:text-[20px] flex items-center gap-3 w-full">
      <span className="text-[#066DCC] text-[16px] md:text-[20px]  font-bold w-[40%]">
        {fieldName}:
      </span>
      <span
        className={`text-[16px] md:text-[20px] font-semibold leading-7 truncate overflow-clip w-[60%] ${
          fieldValue === "Completed"
            ? "text-[green]"
            : fieldValue === "Queued"
            ? "text-[black]"
            : fieldValue === "InProgress"
            ? "text-[orange]"
            : "text-[red]"
        }`}
      >
        {fieldValue === "Completed"
          ? "Đã in"
          : fieldValue === "Queued"
          ? "Đang đợi"
          : fieldValue === "InProgress"
          ? "Đang in"
          : "Đã hủy"}
      </span>
    </div>
  );
};

export default InfoField;
