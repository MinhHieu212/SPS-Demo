import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HcmutLogo, ErrorIcon } from "../../Assets/Icons/Icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Tên tài khoản là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
  });

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Helo ba gia", data);

    const res = await axios
      .post("https://ssps-7wxl.onrender.com/v1/user/login", data)
      .then((response) => {
        console.log(response.status);
        localStorage.setItem("accessToken", response?.data?.data?.accessToken);
        localStorage.setItem(
          "refreshToken",
          response?.data?.data?.refreshToken
        );
        localStorage.setItem("Role", "SPSO");

        if (response?.status === 200) {
          setTimeout(() => {
            if (!Object.keys(errors).length) {
              navigate("/Home");
            }
          }, 1500);
        }
      })
      .catch((errors) => console.log(errors));
  };

  const handleReset = () => {
    reset();
  };

  return (
    <>
      <div className="Wrapperlogin w-[85%] bg-white mx-auto mt-2 shadow-sm">
        <div className="Title w-full h-[70px] bg-[#210F7A] flex items-center pl-[5px]">
          <HcmutLogo></HcmutLogo>
          <div className="text-white font-bold text-[26px] ml-[24px] tracking-widest">
            DỊCH VỤ XÁC THỰC TẬP TRUNG
          </div>
        </div>
        <div className="flex items-start wrapperBox">
          <div className="formContainer ml-[10px] my-[10px] bg-[#eeeeee] w-[420px] p-[20px]">
            {Object.keys(errors).length > 0 && (
              <div className="w-full py-3 rounded-lg bg-[#ffeedd] text-[#bb0000] border border-red-400 text-center flex gap-2 items-center pl-4">
                <ErrorIcon></ErrorIcon>
                <div className="pl-3">
                  <p> {errors?.email?.message}</p>
                  <p> {errors?.password?.message}</p>
                </div>
              </div>
            )}
            <div className="font-bold text-[#990033] text-[18px] border-b-2 border-[#990033] tracking-widest">
              Nhập thông tin tài khoản của bạn
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-[10px]">
                <label
                  htmlFor="email"
                  className="block font-semibold text-[#777777] text-[16px]"
                >
                  Tên tài khoản
                </label>
                <input
                  {...register("email")}
                  name="email"
                  id="email"
                  type="text"
                  className="h-[30px] w-[314px] px-2 outline-none border border-[#dddddd] text-[16px] bg-[#ffffdd] rounded-[3px]"
                />
              </div>
              <div className="mt-[10px]">
                <label
                  htmlFor="password"
                  className="block font-semibold text-[16px] text-[#777777]"
                >
                  Mật khẩu
                </label>
                <input
                  {...register("password")}
                  name="password"
                  id="password"
                  type="password"
                  className="h-[30px] w-[314px] px-2 outline-none border border-[#dddddd] text-[16px] bg-[#ffffdd] rounded-[3px]"
                />
              </div>
              <div className="mt-[10px] flex items-start border-b-2 border-[#990033] pb-[10px]">
                <input type="checkbox" className="s translate-y-[2px]" />
                <span className="text-[#777777] text-[14px] pl-2 tracking-widest">
                  Cảnh báo trước khi tôi đăng nhập vào các trang web khác.
                </span>
              </div>
              <div className="flex gap-1 my-[10px]">
                <button
                  type="submit"
                  className="bg-[#006dcc] text-white rounded-[4px] outline-none px-[14px] py-[4px] text-[14px]"
                >
                  Đăng nhập
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#006dcc] text-white rounded-[4px] outline-none px-[14px] py-[4px] text-[14px]"
                >
                  Xóa
                </button>
              </div>
              <a
                href="https://account.hcmut.edu.vn/"
                className="text-[#0000ee] text-[14px]"
              >
                Thay đổi mật khẩu?
              </a>
            </form>
          </div>
          <div className="mt-[30px] ml-[20px]">
            <h2 className="text-[#990033] text-[16px] tracking-wider font-semibold">
              Ngôn ngữ
            </h2>
            <div>
              <span className="text-[#0000ee] cursor-pointer text-[14px] underline">
                Tiếng Việt
              </span>
              <span className="mx-[10px]">|</span>
              <span className="text-[#0000ee] cursor-pointer text-[14px] underline">
                Tiếng Anh
              </span>
            </div>
            <h2 className="text-[#990033] text-[16px] mt-[10px] tracking-wider font-semibold">
              Lưu ý
            </h2>
            <p className="text-[14px] px-[20px]">
              Trang đăng nhập này cho phép đăng nhập một lần đến nhiều hệ thống
              web ở trường Đại học Bách Khoa Tp.HCM.Điều này có nghĩa là bạn chỉ
              đăng nhập một lần cho những hệ thống web đã đăng ký với hệ thống
              xác thực quản lý truy cập tập trung.
            </p>

            <p className="text-[14px] px-[20px]">
              Bạn cần dùng tài khoản HCMUT để đăng nhập. Tài khoản HCMUT cho
              phép truy cập đến nhiều tài nguyên bao gồm hệ thống thông tin, thư
              điện tử, ...
            </p>
            <p className="text-[14px] px-[20px]">
              Vì lý do an ninh, bạn hãy Thoát khỏi trình duyệt Web khi bạn kết
              thúc việc truy cập các dịch vụ đòi hỏi xác thực!
            </p>
            <h2 className="text-[#990033] text-[16px] mt-[15px] tracking-wider font-semibold">
              Hỗ trợ kỹ thuật
            </h2>
            <div>
              <div className="text-[14px] px-[5px]">
                Email:
                <a
                  href="mailto:support@hcmut.edu.vn"
                  className="text-[#0000ee]  text-[14px] ml-[10px] underline"
                >
                  support@hcmut.edu.vn
                </a>
                <span className="mx-[10px]">|</span>
                <a href="/" className="text-[14px] underline">
                  ĐT: (84-8) 38647256 - 5200
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto text-[14px] mt-3 text-[#777777]">
        Bản quyền © 2011 - 2012 Đại học Bách Khoa Tp. Hồ Chí Minh. Được hỗ trợ
      </div>
      <div className="w-[85%] mx-auto text-[14px] text-[#777777]">
        bởi
        <a
          href="https://www.apereo.org/projects/cas"
          className="text-[#0000ee] ml-[3px]"
        >
          Jasig CAS 3.5.1
        </a>
      </div>
    </>
  );
};

export default Login;
