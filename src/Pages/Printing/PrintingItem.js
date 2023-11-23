import React from "react";
import "./Printing.scss";
import { PrinterIcon } from "../../Assets/Icons/Icons";
import { useNavigate } from "react-router-dom";

function PrintingItem(props) {
  const navigate = useNavigate();
  return (
    <div
      className="PrintingItem mt-3"
      onClick={() => {
        if (props.id !== "...") navigate(`/Printing/${props.id}`);
      }}
    >
      <div className="bg-[#e8e7e7] hover:shadow-lg hover:bg-[#d7d7db] transition-all duration-100 cursor-pointer flex rounded-md justify-evenly w-[100] shadow-md">
        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 rounded-lg text-center item flex flex-col justify-center items-center border-2 border-[#1488db] ">
          <PrinterIcon></PrinterIcon>
          <p className="text-[16px] lg:text-[18px] font-bold mt-1 text-[#1488db]">
            ID: {<span className="text-black pl-2"> {props.id} </span>}
          </p>
        </div>

        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item text-center flex flex-col border-2 border-[#1488db]  justify-evenly">
          <p className="text-[16px] lg:text-[18px] text-[#1488db] font-semibold">
            Cơ sở: <span className="text-black pl-2">{props.base}</span>
          </p>
          <p className="text-[16px] lg:text-[18px] text-[#1488db] font-semibold ">
            Địa điểm:
            <span className="text-black pl-2"> {props.building}</span>
          </p>
          <p className="text-[16px] lg:text-[18px] text-[#1488db] font-semibold ">
            Phòng: <span className="text-black pl-2">{props.room}</span>
          </p>
        </div>

        <div className="w-[30%] my-3 mx-1 md:m-3 shadow-md bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item flex flex-col justify-evenly border-2 border-[#1488db] ">
          <p className="text-[16px] lg:text-[18px] text-[#1488db] text-center font-semibold">
            Trạng thái:
            <span className="text-black pl-2 block md:inline text-center">
              {props.status}
            </span>
          </p>
          <p className="text-[16px] lg:text-[18px] text-[#1488db] text-center font-semibold">
            Hàng đợi:
            <span className="text-black pl-2 block md:inline text-center">
              {props.request} yêu cầu
            </span>
          </p>
        </div>
      </div>
      <hr className="sm-hr mt-3" />
    </div>
  );
}

export default PrintingItem;
