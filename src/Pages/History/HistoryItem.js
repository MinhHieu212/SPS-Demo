import React from "react";
import './History.scss'
import { BinIcon, InfoIcon } from "../../Assets/Icons/Icons";

function HistoryItem(props) {
    return (
        <div className="HistoryItem flex flex-row justify-between items-center bg-[#E7E5E5] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-2 rounded-md">
            <div>{props.fileName}</div>
            <div>{props.printerId}</div>
            <div>{props.position}</div>
            <div>{props.date}</div>
            <div>{props.status}</div>
            <div className="flex flex-row gap-4">
                <InfoIcon />
                <BinIcon />
            </div>
        </div>
    )
}
export default HistoryItem