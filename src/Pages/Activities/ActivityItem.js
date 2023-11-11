import React from "react";
import './Activities.scss';
import { FilterIcon, SearchIcon, InfoIcon } from "../../Assets/Icons/Icons";

function ActivityItem(props) {
    return (
        <div className="ActivityItem flex flex-row justify-between items-center bg-[#E7E5E5] text-sm md:text-base lg:text-lg font-bold py-3 px-4 mt-3 rounded-sm border-b-2 border-black w-[714px] md:w-full">
            <div className="min-w-[26%] truncate overflow-clip">{props.studentName}</div>
            <div className="min-w-[12%]">{props.studentId}</div>
            <div className="min-w-[12%]">{props.printerId}</div>
            <div className="min-w-[12%]">{props.location}</div>
            <div className="min-w-[12%]">{props.date}</div>
            <div className="min-w-[26%] flex gap-2">
                <p className="w-[80%] truncate overflow-clip">{props.fileName}</p>
                <InfoIcon className="w-[20%]"></InfoIcon>
            </div>
        </div>
    )
}

export default ActivityItem;