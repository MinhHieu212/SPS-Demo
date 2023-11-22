import React, { useEffect, useState } from "react";
import PaymentInfo from "./PaymentInfo";
import "./BKPay.scss";
import { useNavigate } from "react-router-dom";
import { getPaymentsList } from "../../APIs/BKPayAPI/BKPayAPI";
import { LogOutIcon } from "../../Assets/Icons/Icons";
import { useUserInfo } from "../../Contexts/UserInfoContext";

const Bkpay = () => {
  const userInfoContext = useUserInfo();
  const [userInformation, setUserInformation] = useState(userInfoContext.info);
  const navigate = useNavigate();

  const [paymentsList, setPaymentsList] = useState([]);

  useEffect(() => {
    const handleCallApi = async () => {
      const response = await getPaymentsList();
      console.log("reponse from get payments api: ", response);
      setPaymentsList(response?.data?.data);
    };

    handleCallApi();

    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);

  return (
    <div className="BKPay bg-[#eee]">
      <div id="slider-BKPay" className="relative w-full">
        <div className="account-info flex flex-row items-center justify-center absolute bg-black text-white rounded-lg bottom-0 right-0">
          <div className="relative account-item account-item-separate">
            Xin chào{" "}
            {userInformation?.firstName + " " + userInformation?.lastName ||
              "None"}
          </div>
          <div className="relative account-item account-item-separate">
            Hướng dẫn sử dụng
          </div>
          <div
            className="relative account-item"
            onClick={() => navigate("/Home")}
          >
            <LogOutIcon></LogOutIcon>
          </div>
        </div>
      </div>
      <div id="container" className="bg-[#fff] rounded-lg drop-shadow-xl">
        <div className="flex flex-row">
          <div className="w-1/2">
            <p className="text-[#6796ce] item text-xs md:text-sm">
              Thông tin cá nhân
            </p>
            <p className="text-[#6796ce] item text-xs md:text-sm">Học bổng</p>
            <p className="text-[#6796ce] item text-xs md:text-sm">
              Phí học phí
            </p>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="semester-code"
              className="w-full text-xs md:text-sm"
            >
              Mã học kỳ
            </label>
            <input
              type="text"
              id="semester-code"
              className="border border-gray-300 rounded w-full"
              name="semester-code"
            />
            <div className="flex items-center mt-2 justify-center gap-4">
              <button className="text-white px-4 py-2 rounded btn w-1/2 btn text-xs md:text-sm">
                Tìm kiếm
              </button>
              <button className="text-white px-4 py-2 rounded btn w-1/2 btn text-xs md:text-sm">
                Xóa tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <p className="title text-[#C63B00] font-semibold mt-4 text-xs md:text-sm">
          Phí / Học phí của sinh viên
        </p>
        <div className="overflow-x-auto">
          <div className="wrap">
            <div className="flex flex-row justify-between items-center text-[#1824C7] font-semibold payment-section py-2 px-2 text-xs lg:text-sm">
              <div>Nội dung</div>
              <div>Đợt thanh toán</div>
              <div>Loại thanh toán</div>
              <div>Ngày dự kiến</div>
              <div>Số tiền</div>
              <div>Tạm thu</div>
              <div>Đã thanh toán</div>
              <div>Còn lại</div>
            </div>
            {paymentsList?.map((info, index) => (
              <PaymentInfo
                key={index}
                semester={info.shortContent.slice(-3)}
                content={info.shortContent}
                batch={info._id.slice(0, 10)}
                type={"Tiền mua giấy in"}
                date={
                  info.updatedAt.split("T")[0] +
                  " " +
                  info.updatedAt.split("T")[1].substring(0, 8)
                }
                total={info.money}
                fee={0}
                checkout={info.paidMoney}
                remain={info.leftMoney}
                checkoutDate={
                  info.updatedAt.split("T")[0] +
                  " " +
                  info.updatedAt.split("T")[1].substring(0, 8)
                }
                order={info.stt}
                id={info._id.slice(0, 10)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkpay;
