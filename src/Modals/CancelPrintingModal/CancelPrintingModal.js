import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { cancelPrintingAPI } from "../../APIs/HistoryAPI/HistoryAPI";

const CancelPrintingModal = ({ children, printingLogId }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const data = {
    printingLogId: printingLogId,
  };

  const callApiCancel = async () => {
    const reponse = await cancelPrintingAPI(data);
    console.log("Reponse form Cancel Prinintg Log", reponse);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[350px] md:w-[400px] overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN HỦY
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold h-[100px] ">
            Xác nhận hủy cho yêu cầu in tại
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-gradient-to-br from-[#ff7d7d] outline-none to-[#b84949]  p-2 w-[40%] block rounded-md text-[16px] font-semibold text-white border-[1px] border-[#367FA9]"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  p-2 w-[40%] block rounded-md text-[16px] font-semibold text-white border-[1px] border-[#367FA9]"
              onClick={callApiCancel}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default CancelPrintingModal;
