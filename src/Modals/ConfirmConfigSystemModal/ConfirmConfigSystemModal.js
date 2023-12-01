import React, { useEffect, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { toast } from "../../Utils/Toastify";

const ConfirmConfigSystemModal = ({ children, handleConfigSys }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [pass, setPass] = useState("");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleConfirm = () => {
    if (pass === "123456") {
      handleConfigSys();
      setOpenModal(false);
    } else {
      toast.error("Mật khấu không chính xác !");
    }
  };

  useEffect(() => {
    if (openModal === false) setPass("");
  }, [openModal]);

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[400px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN THAY ĐỔI CẤU HÌNH
          </div>

          <div className="flex flex-col items-center justify-center min-h-[95px] my-3 w-full ">
            <label
              htmlFor="pass"
              className="font-bold text-[16px] md:text-[18px]  w-[90%] "
            >
              Nhập mật khẩu để xác nhận
            </label>
            <input
              type="password"
              id="pass"
              value={pass}
              className="px-2 p-2 w-[90%] border-2 rounded-md border-[#3C8DBC] outline-none text-[16px] md:text-[18px] "
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-gradient-to-br from-[#ff7d7d] outline-none cursor-pointer to-[#b84949] p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px] font-semibold text-white hover:from-[#ff5a5a] hover:to-[#9e3a3a] transition-all duration-500"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>

            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none cursor-pointer from-cyan-500 p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px] font-semibold text-white hover:from-cyan-700 transition-all duration-500"
              onClick={handleConfirm}
              disabled={isButtonDisable}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ConfirmConfigSystemModal;
