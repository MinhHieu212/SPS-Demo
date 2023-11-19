import React, { useEffect } from "react";
import PaymentInfo from "./PaymentInfo";
import "./BKPay.scss";
import { useNavigate } from "react-router-dom";
import { BKPayAPI, res } from "../../APIs/BKPayAPI/BKPayAPI";

var result = await BKPayAPI().then(res => res);

var renderInfos = [];
var apiInfos = result.data.data;
console.log(apiInfos);
for (let i = 0; i < apiInfos.length; i++) {
  let tmpObj = {};
  tmpObj.endDate = apiInfos[i].endDate.slice(0,10) + ' ' + apiInfos[i].endDate.slice(11,19);
  tmpObj.leftMoney = apiInfos[i].leftMoney;
  tmpObj.money = apiInfos[i].money;
  tmpObj.paidMoney = apiInfos[i].paidMoney;
  tmpObj.shortContent = apiInfos[i].shortContent;
  tmpObj.stt = apiInfos[i].stt;
  tmpObj.updatedAt = apiInfos[i].updatedAt.slice(0,10) + ' ' + apiInfos[i].updatedAt.slice(11,19);
  tmpObj._id = apiInfos[i]._id;
  renderInfos = [...renderInfos, tmpObj];
}
console.log(renderInfos);
const LogOutIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 18.9282C9.21615 19.6303 10.5957 20 12 20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282 16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385 17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8 5.0718"
      stroke="#FFFFFF"
      stroke-width="2"
    />
    <path
      d="M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z"
      fill="#FFFFFF"
    />
  </svg>
);

const Bkpay = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  return (
    <div className="BKPay bg-[#eee]">
      <div id="slider-BKPay" className="relative w-full">
        <div className="account-info flex flex-row items-center justify-center absolute bg-black text-white rounded-lg bottom-0 right-0">
          <div className="relative account-item account-item-separate">
            Xin chào TRƯƠNG THUẬN HƯNG
          </div>
          <div className="relative account-item account-item-separate">
            Hướng dẫn sử dụng
          </div>
          <div className="relative account-item">
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
            {renderInfos.map((info) => (
              <PaymentInfo
                semester={info.shortContent.slice(-3)}
                content={info.shortContent}
                batch={info._id.slice(0,10)}
                type={"Tiền mua giấy in"}
                date={info.endDate}
                total={info.money}
                fee={0}
                checkout={info.paidMoney}
                remain={info.leftMoney}
                checkoutDate={info.updatedAt}
                order={info.stt}
                id={info._id.slice(0,10)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkpay;
