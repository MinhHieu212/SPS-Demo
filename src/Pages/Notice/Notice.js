import React, { useEffect, useState } from "react";
import NoticeItem from "./NoticeItem";
import { getNotice } from "../../APIs/SpsoAPI/SpsoAPI";
import { useNavigate } from "react-router";
import { convertTime } from "../../Utils/Time";
export var newNotifies = 6;
const Notice = () => {
  const navigate = useNavigate();
  const [renderList, setRenderList] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleGetNotice = async(params) => {
      const response = await getNotice(params);
      console.log(response?.data?.data.allNotices);
      setData(response?.data?.data.allNotices);
    }
    handleGetNotice({});
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList])
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
        {data?.map((item, index) => (
          <NoticeItem
            new={0}
            key={index}
            index={index}
            role={item.sender.role}
            content={""}
            location={item.location.facility + ", " + item.location.department + ", " + item.location.room}
            time={convertTime(item.createdAt).slice(0,10) + " " + convertTime(item.createdAt).slice(11,19)}
          />
        ))}
    </div>
  </div>;
};

export default Notice;
