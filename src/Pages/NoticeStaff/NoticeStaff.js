import React, { useEffect, useState } from "react";
import NoticeItem from "./NoticeItemStaff";
import { useNavigate } from "react-router";
import { convertTime } from "../../Utils/Time";
import { useSocket } from "../../Contexts/SocketIOContenxt";
import { useNewNotice } from "../../Contexts/NoticeContext";
import { dataFake } from "./FixedDataStaff";
import {
  confirmCheckNoticeStaff,
  getNoticeStaff,
} from "../../APIs/StaffAPI/StaffAPI";


const NoticeStaff = () => {
  const navigate = useNavigate();
  const UserSocket = useSocket();
  const [data, setData] = useState(dataFake);
  const NewNoticeContext = useNewNotice();

  useEffect(() => {
    handleGetNotice({});
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, []);

  const handleGetNotice = async (params) => {
    setData(dataFake);
    const response = await getNoticeStaff(params);
    setData(response?.data?.data.allNotices);
    NewNoticeContext?.updateNewNotice(response?.data?.data.news);
  };

  const fetchNotify = async (params) => {
    await handleGetNotice(params);
  };

  UserSocket?.socket?.on("update-notification-list", () => {
    try {
      console.log("Signal Update-Notification-List");
      fetchNotify({});
    } catch (error) {
      console.log("Error Update-Notification-List");
    }
  });

  const handleConfirmNotice = async () => {
    try {
      setData(dataFake);
      await confirmCheckNoticeStaff();
      await handleGetNotice();
    } catch (err) {
      console.log("Error handle confirm check notice");
    }
  };

  return (
    <div className="Notice mx-auto max-w-[1280px] w-full px-[10px] lg:px-[20px] bg-[white] shadow-sm pb-5 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3  printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3  text-[#066DCC] flex items-center justify-between">
        <span> THÔNG BÁO HỆ THỐNG </span>
        <button
          className="text-[16px] bg-[#066DCC] rounded-md outline-none text-white px-3"
          onClick={handleConfirmNotice}
        >
          Xác Nhận Đã Xem
        </button>
      </h2>

      <div className=" w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px]  flex flex-row mx-auto justify-between shadow-md items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
          <div className="text-center w-[15%]">THỜI GIAN</div>
          <div className="text-center w-[15%]">HỌ TÊN</div>
          <div className="text-center w-[15%]">VAI TRÒ</div>
          <div className="text-center w-[40%]">NỘI DUNG</div>
          <div className="text-center w-[15%]">VỊ TRÍ</div>
        </div>
        <div className="max-h-[79vh] md:max-h-[87vh] lg:max-h-[79vh] min-w-[800px] md:w-full overflow-y-scroll">
          {data?.map((item, index) => (
            <NoticeItem
              seen={item.seen}
              new={item.news}
              key={index}
              index={index}
              name={item.sender.lastName + " " + item.sender.firstName}
              role={item.sender.role}
              content={item.description}
              location={
                item.location.facility +
                ", " +
                item.location.department +
                ", " +
                item.location.room
              }
              time={
                convertTime(item.createdAt).slice(0, 10) +
                " " +
                convertTime(item.createdAt).slice(11, 19)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeStaff;
