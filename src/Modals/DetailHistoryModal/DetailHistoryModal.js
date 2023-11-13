import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { InfoField2 } from "../../Utils/InfoField";

const DetailHistoryModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const info = {
    Printer_ID: "12345",
    Printer_Location: "CS1 , H6 , 304",
    Date: "12-03-2023",
    State: "Đã In",
    FileName: "Coluuchat.pdf",
    Quantity: "2 bản",
    PageQuantity: "A4: 17",
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="container w-[350px] md:w-[500px] p-0 rounded-lg overflow-hidden shadow-lg">
          <div className="header bg-[#3C8DBC] text-white text-[24px] font-bold flex items-center justify-center h-[70px] w-full">
            CHI TIẾT IN ẤN
          </div>
          <div className="p-2 flex items-center justify-center gap-y-2 flex-col py-4">
            <InfoField2
              fieldName={"ID máy in"}
              fieldValue={info.Printer_ID}
            ></InfoField2>
            <InfoField2
              fieldName={"Vị trí"}
              fieldValue={info.Printer_Location}
            ></InfoField2>
            <InfoField2
              fieldName={"Ngày in"}
              fieldValue={info.Date}
            ></InfoField2>
            <InfoField2
              fieldName={"Trạng thái"}
              fieldValue={info.State}
            ></InfoField2>
            <InfoField2
              fieldName={"Tên file"}
              fieldValue={info.FileName}
            ></InfoField2>
            <InfoField2
              fieldName={"Số bản in:"}
              fieldValue={info.Quantity}
            ></InfoField2>
            <InfoField2
              fieldName={"Lượng giấy in"}
              fieldValue={info.PageQuantity}
            ></InfoField2>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default DetailHistoryModal;
