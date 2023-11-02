import React, { useState } from "react";
import CenterModal from "./CenterModal";

const ConfirmCancelModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[350px] md:w-[400px] overflow-hidden rounded-lg">
          <div className="header bg-[#3C8DBC] text-white text-[24px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN
          </div>
          <div className="flex items-center justify-center text-[20px] font-semibold h-[100px] ">
            Xác nhận hủy yêu cầu in cho file in hiện tại
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button className="bg-[#FF2121] p-3 w-[40%] block rounded-lg text-[16px] font-semibold text-white">
              Hủy bỏ
            </button>
            <button className="bg-[#1488DB] p-3 w-[40%] block rounded-lg text-[16px] font-semibold text-white">
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ConfirmCancelModal;
