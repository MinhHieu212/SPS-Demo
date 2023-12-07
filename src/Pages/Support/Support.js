import React, { useEffect } from "react";
import "./Support.scss";
import { useNavigate } from "react-router";
import student from "../../Assets/images/student.svg";
import manager from "../../Assets/images/manager.svg";
import staff from "../../Assets/images/employee-icon.svg";

const Support = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, []);

  return (
    <div className="Support max-w-[1280px] px-[10px] lg:px-[20px] mx-auto mb-5 bg-[white] shadow-sm min-h-[93vh]">
      <h1 className="text-2xl lg:text-3xl font-semibold mt-3 border-b-4 border-[#066DCC] pb-2 md:pb-3">
        HƯỚNG DẪN
      </h1>
      <div className="Support_lgradient mt-4 md:mt-8 relative justify-center pt-[50%] md:pt-[50%]">
        <div className="slider__content2 absolute text-center text-[#0f6cbf] left-1/2 top-[1rem] md:top-[2.5rem]">
          <h2 className="slider__heading2 text-base mb-1 md:text-3xl lg:text-5xl">
            CHÀO MỪNG ĐẾN TRANG HƯỚNG DẪN
          </h2>
        </div>
      </div>

      <div className="guide text-[16px] lg:text-[18px] mt-4 pb-2 md:pb-3 items-center justify-evenly w-full mx-auto">
        <p className="text-base md:text-xl indent-4">
          Để sử dụng được hệ thống, người quản lý và nhân viên quầy cần phải
          đăng nhập với tài khoản được cấp. Đối với sinh viên, các bạn chỉ cần
          sử dụng tài khoản trường có sẵn.
        </p>
        <p className="text-base md:text-xl mb-4 md:mb-8 indent-4">
          Sau khi đăng nhập, người dùng có thể tải xuống các tài liệu hướng dẫn
          sau và làm theo:
        </p>
        <div className="flex flex-col md:flex-row md:gap-16 gap-8 px-8 mb-4 md:mb-8 justify-between text-[16px] md:text-[20px]">
          <div className="onlySV text-center border rounded-2xl px-4 pt-4 pb-0 w-full md:w-1/3">
            <a
              href="https://drive.google.com/file/d/1VbCwMirVQQDkUVRbwgtaEUmh5tp3crrb/view?usp=drive_link"
              target="_blank"
            >
              <img
                src={student}
                alt="ICON_SV"
                className="w-[40%] h-[40%] md:w-[50%] md:h-[50%] mx-auto"
              />
              <p className=" text-[16px] md:text-[24px] mt-2 font-semibold md:pb-4 my-2">
                Dành cho sinh viên
              </p>
            </a>
          </div>

          <div className="onlySPSO text-center rounded-2xl px-4 pt-4 pb-0 shadow-xl w-full md:w-1/3">
            <a
              href="https://drive.google.com/file/d/1VbCwMirVQQDkUVRbwgtaEUmh5tp3crrb/view?usp=drive_link"
              target="_blank"
            >
              <img
                src={manager}
                alt="ICON_MN"
                className="w-[40%] h-[40%] md:w-[50%] md:h-[50%] mx-auto"
              />
              <p className=" text-[16px] md:text-[24px] mt-2 md:pb-4 font-semibold my-2">
                Dành cho nhà quản lý
              </p>
            </a>
          </div>

          <div className="onlyST text-center rounded-2xl px-4 pt-4 pb-0 shadow-xl w-full md:w-1/3">
            <a
              href="https://drive.google.com/file/d/1ps87hFv4aXH3TlBimgUZP4zKSZS1pJ2A/view?usp=sharing"
              target="_blank"
            >
              <img
                src={staff}
                alt="ICON_ST"
                className="w-[40%] h-[40%] md:w-[50%] md:h-[50%] mx-auto"
              />
              <p className=" text-[16px] md:text-[24px] mt-2 font-semibold md:pb-4 my-2 ">
                Dành cho nhân viên
              </p>
            </a>
          </div>
        </div>

        <p className="text-base md:text-xl indent-4">
          Nếu có thắc mắc về hướng dẫn trong tài liệu, vui lòng liên hệ
          bigdaddy.spssvn@gmail.com để được giải đáp. Chúng tôi không giải quyết
          những câu hỏi mà trong tài liệu đã được đề cập rõ ràng.
        </p>
      </div>

      <div className="faq w-full flex flex-col gap-[1.25rem] text-base md:text-xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mt-4 pb-1 md:pb-2">
          CÂU HỎI THƯỜNG GẶP
        </h2>
        <ul className="m-d expand-list">
          <li data-md-content="300">
            <label
              className="tab text-base md:text-xl flex flex-row items-center"
              htmlFor="tab1"
            >
              1. Giá tiền một trang a4 hay a3 có thay đổi theo thời gian?
            </label>
            <input type="checkbox" id="tab1" name="tab1" className="tab1" />
            <div className="content">
              <ul>
                <li>
                  <p>
                    Có thay đổi bạn nhé. Điều đó phụ thuộc vào chính sách của
                    chúng tôi. Tuy vậy, chúng tôi vẫn sẽ cân nhắc vấn đề giá
                    tiền để đảm bảo không có sự biến động lớn và mức giá duy trì
                    hợp lý.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li data-md-content="300">
            <label
              className="tab text-base md:text-xl flex flex-row items-center"
              htmlFor="tab2"
            >
              2. Tôi không phải sinh viên hay cán bộ nhà trường thì có được sử
              dụng không?
            </label>
            <input type="checkbox" id="tab2" name="tab2" className="tab2" />
            <div className="content">
              <ul>
                <li>
                  <p>
                    Không bạn nhé. Việc đăng nhập sẽ thực hiện thông qua cổng
                    xác thực tập trung của trường Đại học Bách Khoa. Vì thế, bạn
                    phải có tài khoản được trường cung cấp.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li data-md-content="300">
            <label
              className="tab text-base md:text-xl flex flex-row items-center"
              htmlFor="tab3"
            >
              3. Các hình thức thanh toán khả dụng?
            </label>
            <input type="checkbox" id="tab3" name="tab3" className="tab3" />
            <div className="content">
              <ul>
                <li>
                  <p>
                    Hiện tại chúng tôi chỉ triển khai hình thức thanh toán thông
                    qua cổng BKPay của trường. Các hình thức khác có thể được
                    đội ngũ phát triển trong tương lai. Quý khách hàng thông cảm
                    và chờ đợi.
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li data-md-content="300" className="mb-4">
            <label
              className="tab text-base md:text-xl flex flex-row items-center"
              htmlFor="tab4"
            >
              4. Nếu việc in ấn vì lý do nào đó thất bại, tôi có được trả lại
              tiền?
            </label>
            <input type="checkbox" id="tab4" name="tab4" className="tab4" />
            <div className="content">
              <ul>
                <li>
                  <p>
                    Số dư in ấn sẽ được hoàn trả vào tài khoản trên web của bạn.
                    Bạn có thể tiếp tục sử dụng cho các hoạt động sau này.
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
