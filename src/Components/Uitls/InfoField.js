import React from "react";

const InfoField = ({ fieldName, fieldValue }) => {
  return (
    <div className="mb-2">
      <span className="text-[#066DCC] text-[20px] font-bold mr-3">
        {fieldName}:
      </span>
      <span className="text-[20px] font-semibold leading-7">{fieldValue}</span>
    </div>
  );
};

export default InfoField;
