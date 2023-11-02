import React from "react";
import './Printing.scss'
import { PrinterIcon } from "../../Assets/Icons/Icons";
function PrintingItem(props) {
    return (
        <div className="PrintingItem mt-4">
            <div className="bg-[#e6e6e6] flex rounded-xl wrap">
                <div className="w-1/3  bg-white py-2 px-1 rounded-xl text-center item flex flex-col justify-center items-center">
                <PrinterIcon></PrinterIcon>
                    <p className="text-base md:text-xl lg:text-3xl font-bold mt-auto">ID: {props.id}</p>
                </div>
                <div className="w-1/3 bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item text-center flex flex-col justify-evenly">
                    <p className="text-sm md:text-base lg:text-2xl text-[#1488db] font-semibold">Cơ sở: <span className="text-black">{props.base}</span></p>
                    <p className="text-sm md:text-base lg:text-2xl text-[#1488db] font-semibold md:mt-4">Địa điểm: <span className="text-black">Tòa {props.building}</span></p>
                    <p className="text-sm md:text-base lg:text-2xl text-[#1488db] font-semibold md:mt-4">Phòng: <span className="text-black">{props.room}</span></p>
                </div>
                <div className="w-1/3 bg-white py-2 px-1 md:py-4 md:px-2 rounded-md item flex flex-col justify-evenly">
                    <p className="text-sm md:text-base lg:text-2xl text-[#1488db] text-center font-semibold md:mt-4">Trạng thái: <span className="text-black block md:inline text-center">{props.status}</span></p>
                    <p className="text-sm md:text-base lg:text-2xl text-[#1488db] text-center font-semibold md:mt-4">Hàng đợi: <span className="text-black block md:inline text-center">{props.request} yêu cầu</span></p>
                </div>
            </div>
            <hr className="sm-hr mt-4" />
        </div>
    )
}

export default PrintingItem