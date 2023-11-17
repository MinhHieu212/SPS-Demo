import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";

const CancelPrintingModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[350px] md:w-[400px] overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[22px] font-bold flex items-center justify-center h-[50px] w-full">
            XÁC NHẬN XÓA
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold h-[100px] ">
            Xác nhận hủy cho yêu cầu in tại
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-gradient-to-br from-[#999292]  outline-none to-[#B4AFAF] p-2 w-[40%] block rounded-md text-[16px] font-semibold text-white border-[1px] border-[#367FA9]"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  p-2 w-[40%] block rounded-md text-[16px] font-semibold text-white border-[1px] border-[#367FA9]">
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default CancelPrintingModal;
