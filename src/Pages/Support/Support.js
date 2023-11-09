import React from "react";
import "./Support.scss";
const Support = () => {
  return (
    <div className="Support max-w-[1280px] px-[15px] md:px-[32px] lg:px-[70px] mx-auto">
      <h1 className="text-3xl lg:text-4xl font-semibold mt-4 border-b-4 border-black pb-2 md:pb-3">
        HƯỚNG DẪN
      </h1>
      <div className="guide text-1xl lg:text-2xl mt-4 pb-2 md:pb-3 items-center justify-evenly w-full mx-auto">
        <p>
          Để sử dụng được hệ thống, sinh viên / nhà quản lý / nhân viên quầy cần
          phải đăng nhập với tài khoản được cấp.
        </p>
        <ul className="list-disc ml-8 pl-2">
          <li>
            Đối với sinh viên: Sinh viên đăng nhập bằng tài khoản trường có sẵn.
            Đối với sinh viên: Sinh viên đăng nhập bằng tài khoản trường có sẵn.
          </li>
          <li>
            Đối với nhà quản lý: Sử dụng tài khoản riêng dành cho nhà quản lý.
          </li>
          <li>
            Đối với nhân viên quầy: Sử dụng tài khoản riêng dành cho nhân viên
            quầy.
          </li>
        </ul>
        <p>
          Sau khi đăng nhập, người dùng có thể tải xuống các tài liệu hướng dẫn
          sau và làm theo:
        </p>
        <ul className="list-disc ml-8 pl-2">
          <li>
            Dành cho sinh viên:{" "}
            <a href="https://www.matbao.net/">hdsdsinhvien.pdf</a>
          </li>
          <li>
            Dành cho nhà quản lý:{" "}
            <a href="https://www.matbao.net/">hdsdquanly.pdf</a>
          </li>
          <li>
            Dành cho nhân viên quầy:{" "}
            <a href="https://www.matbao.net/">hdsdnhanvienquay.pdf</a>
          </li>
        </ul>
        <p>
          Nếu có thắc mắc về hướng dẫn trong tài liệu, vui lòng liên hệ
          printingservice@hcmut.edu.vn để được giải đáp. Chúng tôi không giải
          quyết những câu hỏi mà trong tài liệu đã được đề cập rõ ràng.
        </p>
      </div>

      <div className="faq w-full text-1xl lg:text-2xl items-center justify-evenly mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mt-4 pb-1 md:pb-2">
          CÂU HỎI THƯỜNG GẶP
        </h2>
        <ul className="m-d expand-list">
          <li data-md-content="300">
            <label className="tab" htmlFor="tab1">
              Giá tiền một trang a4 hay a3 có thay đổi theo thời gian?
            </label>
            <input type="checkbox" id="tab1" name="tab1" className="tab1" />
            <div className="content">
              <ul>
                <li>
                  <p>
                    Có thay đổi bạn nhé. Điều đó phụ thuộc vào chính sách của
                    chúng tôi. Giá xăng còn thay đổi mà huống chi giá giấy
                    ¯\_(ツ)_/¯
                  </p>
                </li>
              </ul>
            </div>
          </li>

          <li data-md-content="300">
            <label className="tab" htmlFor="tab2">
              Tôi không phải sinh viên hay cán bộ nhà trường thì có được sử dụng
              không?
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

          <li data-md-content="300" className="mb-4">
            <label className="tab" htmlFor="tab3">
              Các hình thức thanh toán khả dụng?
            </label>
            <input type="checkbox" id="tab3" name="tab3" className="tab3" />
            <div className="content">
              <em>&lt;&lt;BKPAY&gt;&gt;</em>
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
        </ul>
      </div>
    </div>
  );
};

export default Support;
