import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoField from "../../Utils/InfoField";
import { CloseModalIcon } from "../../Assets/Icons/Icons";
import PagesPurchaseModal from "../PagesPurchaseModal/PagesPurchaseModal";
import { useUserInfo } from "../../Contexts/UserInfoContext";
import { useRole } from "../../Contexts/RoleContext";

function StudentInfoModal({ children }) {
  const navigate = useNavigate();
  const elementRef = useRef();
  const [open, setOpen] = useState(false);
  const userInfoContext = useUserInfo();
  const [userInformation, setUserInformation] = useState(userInfoContext.info);
  const roleContext = useRole();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  return (
    <div className="relative w-auto h-auto">
      <div
        id="triggerUserInfo"
        className=" cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {children}
      </div>
      {open && (
        <div
          className="absolute border-[1px] border-[#367FA9] top-[140%] right-5 w-[343px] h-[auto] rounded-lg bg-white overflow-hidden shadow-lg"
          ref={elementRef}
        >
          <div className="HeaderInfo relative flex items-center justify-center text-[20px] font-bold text-white h-[60px] w-full bg-[#3C8DBC]  bg-gradient-to-br from-cyan-500 to-#3C8DBC">
            {roleContext.role === "student"
              ? "CHI TIẾT SINH VIÊN"
              : "THÔNG TIN CHI TIẾT"}
            <span
              className="absolute top-[13px] right-2"
              onClick={() => setOpen(false)}
            >
              <CloseModalIcon></CloseModalIcon>
            </span>
          </div>
          {roleContext.role === "student" ? (
            <div className="p-3">
              <InfoField
                fieldName={"Tên"}
                fieldValue={
                  userInformation.firstName + " " + userInformation.lastName
                }
              ></InfoField>
              <InfoField
                fieldName={"Mã số sinh viên"}
                fieldValue={userInformation?.mssv}
              ></InfoField>
              <InfoField
                fieldName={"Khoa"}
                fieldValue={userInformation?.major}
              ></InfoField>
              <InfoField
                fieldName={"Lớp"}
                fieldValue={userInformation?.classes}
              ></InfoField>
              <div className="mb-2 flex items-center">
                <span className="text-[#066DCC] text-[20px] font-bold mr-3 leading-7">
                  Số dư hiện tại (tờ):
                </span>
                <div className="text-[20px] font-semibold w-[135px] h-[40px] bg-[#D9D9D9] flex items-center justify-center rounded-lg">
                  {userInformation?.balance}
                </div>
              </div>
              <PagesPurchaseModal>
                <button className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 mb-2 mt-4 to-#3C8DBC w-full h-[45px] rounded-lg flex items-center justify-center text-white text-[16px] font-bold hover:bg-[#2c5d8d] hover:from-cyan-400 hover:to-[#345a96] transition-all duration-300">
                  MUA THÊM GIẤY
                </button>
              </PagesPurchaseModal>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-br from-[#999292]  outline-none to-[#B4AFAF] mt-3 w-full h-[45px] rounded-lg flex items-center justify-center text-white text-[16px] font-bold hover:from-[#888181] hover:to-[#A09D9D] transition-all duration-300"
              >
                ĐĂNG XUẤT
              </button>
            </div>
          ) : (
            <div className="p-3">
              <InfoField
                fieldName={"Tên"}
                fieldValue={
                  userInformation.firstName + " " + userInformation.lastName
                }
              ></InfoField>
              <InfoField
                fieldName={"Mã số cán bộ"}
                fieldValue={userInformation?.mssv || "CB11111"}
              ></InfoField>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-br from-[#999292]  outline-none to-[#B4AFAF] mt-3 w-full h-[45px] rounded-lg flex items-center justify-center text-white text-[16px] font-bold hover:from-[#888181] hover:to-[#A09D9D] transition-all duration-300"
              >
                ĐĂNG XUẤT
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StudentInfoModal;
