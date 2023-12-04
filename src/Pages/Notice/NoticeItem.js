import React from "react";

const NoticeItem = (props) => {
    return (
        <div className={
            props.index < props.new ? 'bg-[#DAD8D8] hover:bg-white cursor-pointer NoticeItem flex flex-row justify-between items-center shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-[1px] border-black min-w-[800px] md:w-full max-h-[60px]' : 'bg-white cursor-pointer NoticeItem flex flex-row justify-between items-center shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-[1px] border-black min-w-[800px] md:w-full max-h-[60px]'
        }
        >
            <div className="text-center w-[10%]">{props.role}</div>
            <div className="text-center w-[50%]">{props.content}</div>
            <div className="text-center w-[20%]">{props.location}</div>
            <div className="text-center w-[20%]">{props.time}</div>
        </div>
    )
}

export default NoticeItem;