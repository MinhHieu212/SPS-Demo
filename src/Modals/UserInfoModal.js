import React from "react";
import { useNavigate } from "react-router-dom";
import InfoField from "../Utils/InfoField";
import BottomModal from "./BottomModal";
import BuyPagesModal from "./BuyPagesModal";

function UserBottomModal({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <BottomModal element={children}>
      <div className="w-[343px] h-[410px] rounded-lg overflow-hidden">
        <div className="HeaderInfo flex items-center justify-center text-[20px] font-bold text-white h-[60px] w-full bg-[#367FA9]  bg-gradient-to-br from-cyan-500 to-#3C8DBC">
          CHI TIẾT SINH VIÊN
        </div>
        <div className="p-3">
          <InfoField
            fieldName={"Tên:"}
            fieldValue={"Nguyễn Văn Anh Khoa"}
          ></InfoField>
          <InfoField
            fieldName={"Mã số sinh viên:"}
            fieldValue={"2113777"}
          ></InfoField>
          <InfoField
            fieldName={"Khoa:"}
            fieldValue={"Khoa học và kỹ thuật máy tính"}
          ></InfoField>
          <InfoField fieldName={"Lớp:"} fieldValue={"MT21KH7"}></InfoField>
          <div className="mb-2 flex items-center">
            <span className="text-[#066DCC] text-[20px] font-bold mr-3 leading-7">
              Số dư hiện tại (tờ):
            </span>
            <div className="text-[20px] font-semibold w-[135px] h-[40px] bg-[#D9D9D9] flex items-center justify-center rounded-lg">
              90
            </div>
          </div>
          <BuyPagesModal>
            <button className="bg-[#367FA9] bg-gradient-to-br outline-none from-cyan-500 mb-2 mt-4 to-#3C8DBC w-full h-[45px] rounded-lg flex items-center justify-center text-white text-[16px] font-bold hover:bg-[#2c5d8d] hover:from-cyan-400 hover:to-[#345a96] transition-all duration-300">
              MUA THÊM GIẤY
            </button>
          </BuyPagesModal>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-br from-[#999292]  outline-none to-[#B4AFAF] my-3 w-full h-[45px] rounded-lg flex items-center justify-center text-white text-[16px] font-bold hover:from-[#888181] hover:to-[#A09D9D] transition-all duration-300"
          >
            ĐĂNG XUẤT
          </button>
        </div>
      </div>
    </BottomModal>
  );
}

export default UserBottomModal;
