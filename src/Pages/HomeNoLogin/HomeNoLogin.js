import React, { useEffect } from "react";
import "./HomeNoLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faGauge,
  faDesktop,
  faHandPointer,
  faSchool,
  faFileShield,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const HomeNoLogin = () => {
  return (
    <div className="Home mb-5">
      <div id="slider" className="relative w-full min-h-[400px] ">
        <div className="slider__content absolute text-center text-[#0f6cbf] left-1/2 top-1/2">
          <h1 className="slider__heading text-base text-[#2196f3] mb-1 md:text-3xl lg:text-4xl">
            TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐHQG TP.HCM
          </h1>
          <p className="slider__desc text-xl font-semibold px-2.5 md:text-5xl lg:text-5xl md:mt-5">
            SMART PRINTING SYSTEM
          </p>
        </div>
      </div>
      <div className=" bg-[white] shadow-sm mt-0 max-w-[1280px] mx-auto px-[10px] md:px-[32px] lg:px-[70px]">
        <h2 className="w-full text-2xl md:text-3xl pb-2 lg:text-4xl text-center font-semibold text-[#367fa9] underline underline-offset-4 pt-[50px]">
          DỊCH VỤ CỦA CHÚNG TÔI
        </h2>
        <div className="max-w-[1280px] px-[70px] mx-auto flex flex-col md:flex-row items-center justify-between w-[90%] gap-3 my-[25px]">
          <div className="relative w-[300px] md:w-[30%] h-[280px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1680037568223-9fcccd15dff6?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpbnRpbmd8ZW58MHx8MHx8fDA%3D&fbclid=IwAR33AkO38AwFR5bVCRx9GWL0gPmGhKucS5hVDj0ZBk75QOgvMEagw63cjwQ"
              alt=""
              className="w-full h-full object-fill"
            />
            <p className="item-title absolute font-semibold  text-2xl lg:text-3xl text-white text-center drop-shadow-lg">
              Linh động trong tùy chọn in ấn
            </p>
          </div>
          <div className="relative  w-[300px] md:w-[30%] h-[280px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&fbclid=IwAR2TTRb47Z3rxSPsHu3BPOcipaSBaCSL3MxmRcmBEtXz3RpmibwHC8aIE8Y"
              alt=""
              className="w-full h-full object-fill"
            />
            <p className="item-title absolute font-semibold text-2xl lg:text-3xl text-white text-center drop-shadow-lg">
              Xem lịch sử in ấn của bạn
            </p>
          </div>
          <div className="relative  w-[300px] md:w-[30%] h-[280px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBheW1lbnR8ZW58MHx8MHx8fDA%3D&fbclid=IwAR0cU5LfiJnLpvSu1mzTku2zeu06G_9i2ExmBBEK6jgcDAcjo6L1YAhgU-4"
              alt=""
              className="w-full h-full object-fill"
            />
            <p className="item-title absolute font-semibold  text-2xl lg:text-3xl text-white text-center drop-shadow-lg">
              Thanh toán tiện lợi qua BKPay
            </p>
          </div>
        </div>
        <div className="max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mt-[50  px] font-semibold text-[#367fa9] underline underline-offset-4 mb-8 mt-[50px]">
            ĐẶC ĐIỂM NỔI BẬT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 text-[16px] md:text-[20px]">
            <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
              <FontAwesomeIcon icon={faShieldHalved} size="3x" />
              <p className=" text-[18px] md:text-[24px] mt-3  font-semibold my-2">
                Bảo mật
              </p>
              <p className="  font-normal">
                Xác thực qua tài khoản của nhà trường
              </p>
            </div>
            <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
              <FontAwesomeIcon icon={faGauge} size="3x" />
              <p className=" text-[18px] md:text-[24px] mt-3   font-semibold my-2">
                Hiệu suất
              </p>
              <p className="  font-normal">
                Hệ thống realtime, tốc độ phản hồi nhanh
              </p>
            </div>
            <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
              <FontAwesomeIcon icon={faDesktop} size="3x" />
              <p className=" text-[18px] md:text-[24px] mt-3   font-semibold my-2">
                Tương thích
              </p>
              <p className="  font-normal">
                Hiển thị tốt trên đa dạng thiết bị
              </p>
            </div>
            <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
              <FontAwesomeIcon icon={faHandPointer} size="3x" />
              <p className=" text-[18px] md:text-[24px] mt-3   font-semibold my-2">
                Dễ dùng
              </p>
              <p className="  font-normal">
                Trải nghiệm người dùng tốt, sử dụng đơn giản
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] px-0 md:px-[32px] lg:px-[70px] mx-auto mt-[50px] overflow-hidden">
          <div className="content-img mt-16 rounded-md overflow-hidden"></div>
        </div>
        <div className="max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] mx-auto">
          <h2 className="text-2xl md:text-3xl w-[80%] mx-auto lg:text-4xl text-center font-semibold text-[#367fa9] underline underline-offset-4 mt-[50px] mb-8">
            VÌ SAO SINH VIÊN NÊN SỬ DỤNG SMART PRINTING SYSTEM CỦA NHÀ TRƯỜNG?
          </h2>
          <div className="w-full ">
            <div className="flex flex-col mt-3 md:flex-row items-center justify-center">
              <div className="w-[50%] md:w-[35%] flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faSchool}
                  size="6x"
                  color="#1B9B2F"
                  className="mb-2 md:w-2/5"
                />
              </div>
              <div className="w-[100%] md:w-[65%] flex flex-col items-center justify-center  mt-4">
                <h3 className="text-[#1B9B2F] text-3xl font-semibold mb-2 text-center md:text-left">
                  Ủng hộ nhà trường
                </h3>
                <p className="text-center mx-auto text-[16px] md:text-[20px] w-[90%] md:w-[80%]">
                  Bạn sử dụng hệ thống in ấn này đồng nghĩa với việc bạn đang
                  giúp đỡ nhà trường trong công tác quản lý và thúc đẩy chuyển
                  đổi số. Nhà trường cũng có thêm nguồn thu nhập để đầu tư vào
                  các cơ sở vật chất khác.
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-3 md:flex-row items-center justify-center">
              <div className="w-[50%] md:w-[35%] flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faFileShield}
                  size="6x"
                  color="#1B9B2F"
                  className="mb-2 md:w-2/5"
                />
              </div>
              <div className="w-[100%] md:w-[65%] flex flex-col items-center justify-center  mt-4">
                <h3 className="text-[#1B9B2F] text-3xl font-semibold mb-2 text-center md:text-left">
                  Bảo mật thông tin
                </h3>
                <p className="text-center mx-auto text-[16px] md:text-[20px]  w-[90%] md:w-[80%]">
                  Đối với các sinh viên, việc in ấn bên ngoài đã trở thành điều
                  quen thuộc. Khung cảnh một tài khoản zalo bị bỏ quên chưa đăng
                  xuất trên một máy tính cũng quen thuộc không kém. Hệ thống in
                  của chúng tôi cho phép tải tệp lên trực tiếp và bảo vệ quyền
                  riêng tư của bạn.
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-3 md:flex-row items-center justify-center">
              <div className="w-[50%] md:w-[35%] flex items-center justify-center md:justify-start">
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  size="6x"
                  color="#1B9B2F"
                  className="mb-2 md:w-2/5"
                />
              </div>
              <div className="w-[100%] md:w-[65%] flex flex-col items-center justify-center  mt-4">
                <h3 className="text-[#1B9B2F] w-[80%] text-3xl font-semibold mb-2 text-center md:text-left">
                  Tối ưu thời gian
                </h3>
                <p className="text-center mx-auto text-[16px] md:text-[20px] w-[90%] md:w-[80%]">
                  Khi tài liệu được in không cần gấp, sinh viên có thể làm việc
                  khác. Sinh viên không cần chờ đợi lượt in như trước đây. Việc
                  này giúp sinh viên tối đa hóa việc sử dụng thời gian của mình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNoLogin;
