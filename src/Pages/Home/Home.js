import React from "react";
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faGauge, faDesktop, faHandPointer, faSchool, faFileShield, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
  return (
    <div className="Home">
      <div id="slider" className="relative w-full">
        <div className="slider__content absolute text-center text-[#0f6cbf] left-1/2 top-1/2">
          <h1 className="slider__heading text-base text-[#2196f3] mb-1 md:text-3xl lg:text-4xl">TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐHQG TP.HCM</h1>
          <p className="slider__desc text-xl font-semibold px-2.5 md:text-5xl lg:text-5xl md:mt-5">SMART PRINTING SYSTEM</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl text-center font-semibold text-[#367fa9] underline underline-offset-4 mt-16">DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <div className="flex flex-col md:flex-row mt-8 px-8 md:px-16 gap-8">
          <div className="flex-1 item-1 rounded-lg relative">
            <p className="item-title absolute font-semibold text-lg md:text-lg lg:text-3xl text-white text-center drop-shadow-lg">Linh động trong tùy chọn in ấn</p>
          </div>
          <div className="flex-1 item-2 rounded-lg relative">
            <p className="item-title absolute font-semibold text-lg md:text-lg lg:text-3xl text-white text-center drop-shadow-lg">Xem lịch sử in ấn của bạn</p>
          </div>
          <div className="flex-1 item-3 rounded-lg relative">
            <p className="item-title absolute font-semibold text-lg md:text-lg lg:text-3xl text-white text-center drop-shadow-lg">Thanh toán tiện lợi qua BKPay</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl text-center font-semibold text-[#367fa9] underline underline-offset-4 mt-16 mb-8">ĐẶC ĐIỂM NỔI BẬT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
          <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
            <FontAwesomeIcon icon={faShieldHalved} size="4x" />
            <p className="text-3xl font-semibold my-2">Bảo mật</p>
            <p className="text-2xl font-normal">Xác thực qua tài khoản của nhà trường</p>
          </div>
          <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
            <FontAwesomeIcon icon={faGauge} size="4x" />
            <p className="text-3xl font-semibold my-2">Hiệu suất</p>
            <p className="text-2xl font-normal">Hệ thống realtime, tốc độ phản hồi nhanh</p>
          </div>
          <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
            <FontAwesomeIcon icon={faDesktop} size="4x" />
            <p className="text-3xl font-semibold my-2">Tương thích</p>
            <p className="text-2xl font-normal">Hiển thị tốt trên đa dạng thiết bị</p>
          </div>
          <div className="text-center border border-black rounded-2xl p-4 shadow-xl">
            <FontAwesomeIcon icon={faHandPointer} size="4x" />
            <p className="text-3xl font-semibold my-2">Dễ dùng</p>
            <p className="text-2xl font-normal">Trải nghiệm người dùng tốt, sử dụng đơn giản</p>
          </div>
        </div>
      </div>
      <div className="content-img mt-16"></div>
      <div>
        <h2 className="text-2xl lg:text-4xl text-center font-semibold text-[#367fa9] underline underline-offset-4 mt-16 mb-8">VÌ SAO SINH VIÊN NÊN SỬ DỤNG SMART PRINTING SYSTEM CỦA NHÀ TRƯỜNG?</h2>
        <div className="text-center p-8 md:mb-4 md:flex">
          <FontAwesomeIcon icon={faSchool} size="6x" color="#1B9B2F" className="mb-2 md:w-2/5"/>
          <div className="md:w-3/5 lg:px-16">
            <h3 className="text-[#1B9B2F] text-3xl font-semibold mb-2 text-center md:text-left">Ủng hộ nhà trường</h3>
            <p className="text-justify text-xl">Bạn sử dụng hệ thống in ấn này đồng nghĩa với việc bạn đang giúp đỡ nhà trường trong công tác quản lý và thúc đẩy chuyển đổi số. Nhà trường cũng có thêm nguồn thu nhập để đầu tư vào các cơ sở vật chất khác.</p>
          </div>
        </div>
        <div className="text-center p-8 md:mb-4 md:flex">
          <FontAwesomeIcon icon={faFileShield} size="6x" color="#1B9B2F" className="mb-2 md:w-2/5"/>
          <div className="md:w-3/5 lg:px-16">
            <h3 className="text-[#1B9B2F] text-3xl font-semibold mb-2 text-center md:text-left">Bảo mật thông tin</h3>
            <p className="text-justify text-xl">Đối với các sinh viên, việc in ấn bên ngoài đã trở thành điều quen thuộc. Khung cảnh một tài khoản zalo bị bỏ quên chưa đăng xuất trên một máy tính cũng quen thuộc không kém. Hệ thống in của chúng tôi cho phép tải tệp lên trực tiếp và bảo vệ quyền riêng tư của bạn.</p>
          </div>
        </div>
        <div className="text-center p-8 md:mb-4 md:flex">
          <FontAwesomeIcon icon={faGaugeHigh} size="6x" color="#1B9B2F" className="mb-2 md:w-2/5"/>
          <div className="md:w-3/5 lg:px-16">
            <h3 className="text-[#1B9B2F] text-3xl font-semibold mb-2 text-center md:text-left">Tối ưu thời gian</h3>
            <p className="text-justify text-xl">Khi tài liệu được in không cần gấp, sinh viên có thể làm việc khác. Sinh viên không cần chờ đợi lượt in như trước đây. Việc này giúp sinh viên tối đa hóa việc sử dụng thời gian của mình.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
