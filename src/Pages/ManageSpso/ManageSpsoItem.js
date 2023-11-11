import React from "react";

function ManageSpsoItem(props) {
    return (
        <div className="ManageSpsoItem flex flex-row justify-between items-center bg-[#E7E5E5] text-sm lg:text-lg font-bold py-2 px-4 mt-3 rounded-sm border-b-2 border-black w-[714px] md:w-full">
            <div className="w-[16%]">{props.id}</div>
            <div className="w-[16%]">{props.location}</div>
            <div className="w-[16%]">{props.date}</div>
            <div className="w-[25%] flex flex-row justify-start items-center gap-4">
                <p>{props.queue}</p>
                <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-sm">
                    Chi tiết
                </button>
            </div>
            <div className="w-[27%] flex flex-row justify-start items-center gap-4">
                <p>{props.status}</p>
                <button class="bg-[#c7c7c7] hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-sm">
                    Tùy chỉnh
                </button>
            </div>
        </div>
    )
}

export default ManageSpsoItem