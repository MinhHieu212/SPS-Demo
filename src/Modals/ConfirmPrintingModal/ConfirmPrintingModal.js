import React, { useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";

const ConfirmPrintingModal = ({ children, files }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const data = {
    No_File: 0,
    Quantity: 0,
    No_Pages: 0,
  };

  data.No_File = files?.length;

  files.forEach((file) => {
    data.Quantity += parseInt(file?.quantity);
    data.No_Pages += parseInt(file?.quantity) * 5;
  });

  const handleSendRequestPrint = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[400px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN IN
          </div>
          <div className="flex flex-col items-center justify-center my-3 w-full ">
            <InfoField
              fieldName={"Số file in"}
              fieldValue={data.No_File}
            ></InfoField>
            <InfoField
              fieldName={"Tổng số bản in"}
              fieldValue={data.Quantity}
            ></InfoField>
            {/* <InfoField
              fieldName={"Tổng lượng giấy"}
              fieldValue={data.No_Pages}
            ></InfoField> */}
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-gradient-to-br from-[#ff7d7d] outline-none to-[#b84949]  p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px] font-semibold text-white"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px]  font-semibold text-white"
              onClick={handleSendRequestPrint}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ConfirmPrintingModal;
