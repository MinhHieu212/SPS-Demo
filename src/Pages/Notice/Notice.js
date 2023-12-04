import React from "react";
import NoticeItem from "./NoticeItem";
export var newNotifies = 6;
const notices = [
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  },
  {
    role: "SPSO",
    content: "David Nguyễn đã vô hiệu hóa máy in H3301",
    location: "CS2, H3, 301",
    time: "2023-11-21 19:23:07"
  }
]
const Notice = () => {
  return <div className="Notice mx-auto max-w-[1280px] w-full px-[10px] lg:px-[20px] bg-[white] shadow-sm pb-5 min-h-[93vh]">
    <div className="flex flex-row mt-3 border-b-4 border-[#066DCC] pb-2 md:pb-3 mb-4 items-center justify-between">
      <h2 className="text-2xl lg:text-3xl font-semibold printing-title pb-2 md:pb-3 pt-2 text-[#066DCC] ">
        THÔNG BÁO
      </h2>
    </div>
    <div className=" w-full overflow-x-auto">
      <div className=" min-w-[800px] md:w-full max-h-[60px]  flex flex-row mx-auto justify-between shadow-lg items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
        <div className="text-center w-[10%]">VAI TRÒ</div>
        <div className="text-center w-[50%]">NỘI DUNG</div>
        <div className="text-center w-[20%]">VỊ TRÍ</div>
        <div className="text-center w-[20%]">THỜI GIAN</div>
      </div>
        {notices?.map((notice, index) => (
          <NoticeItem
            new={newNotifies}
            key={index}
            index={index}
            role={notice.role}
            content={notice.content}
            location={notice.location}
            time={notice.time}
          />
        ))}
    </div>
  </div>;
};

export default Notice;
