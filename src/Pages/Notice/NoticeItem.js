import React from "react";

const NoticeItem = (props) => {
    props.functionNewNotifies();
    return (
        <div className={
            !props.seen  ? 'bg-[#DAD8D8] hover:bg-white cursor-pointer NoticeItem flex flex-row justify-between items-center shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-[1px] border-black min-w-[800px] md:w-full max-h-[60px]' : 'bg-white cursor-pointer NoticeItem flex flex-row justify-between items-center shadow-md text-[16px] lg:text-[18px] font-semibold  py-[12px] px-4 mt-2 rounded-sm border-b-[1px] border-black min-w-[800px] md:w-full max-h-[60px]'
        }
        >
            <div className="text-center w-[15%]">{props.name}</div>
            <div className="text-center w-[15%]">{props.role}</div>
            <div dangerouslySetInnerHTML={{ __html: props.content }} className="text-center w-[40%]"></div>
            <div className="text-center w-[15%]">{props.location}</div>
            <div className="text-center w-[15%]">{props.time}</div>
        </div>
    )
}

export default NoticeItem;