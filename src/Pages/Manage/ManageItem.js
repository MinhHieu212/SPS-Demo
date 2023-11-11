import React from "react";
import './Manage.scss'
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";

function ManageItem(props) {
    return (
        <div className="ManageItem flex flex-row justify-between items-center bg-[#E7E5E5] text-sm md:text-base lg:text-lg font-bold py-2 px-4 mt-3 rounded-sm border-b-2 border-black w-[714px] md:w-full">
            <div className="min-w-[25%]">{props.id}</div>
            <div className="min-w-[25%] flex flex-row justify-start gap-6 items-center">
                <p>{props.queue}</p>
                <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
                    Chi tiết
                </button>
            </div>
            <div className="min-w-[25%] flex justify-start items-center">
                <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-sm">
                    Lịch sử
                </button>
            </div>
            <div className="min-w-[25%]">{props.status}</div>
        </div>
    )
}

export default ManageItem;