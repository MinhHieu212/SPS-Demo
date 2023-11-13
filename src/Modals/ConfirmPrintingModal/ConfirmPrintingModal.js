import React, { useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";

const ConfirmPrintingModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const data = {
    No_File: "2",
    Quantity: "2 bản",
    No_Pages: "A4: 17",
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[400px] overflow-hidden rounded-lg">
          <div className="header bg-[#3C8DBC] text-white text-[24px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN IN
          </div>
          <div className="flex flex-col items-center justify-center my-3 w-full">
            <InfoField
              fieldName={"Số file in"}
              fieldValue={data.No_File}
            ></InfoField>
            <InfoField
              fieldName={"Tổng lượng giấy"}
              fieldValue={data.No_Pages}
            ></InfoField>
            <InfoField
              fieldName={"Tổng số bản in"}
              fieldValue={data.Quantity}
            ></InfoField>
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

export default ConfirmPrintingModal;
