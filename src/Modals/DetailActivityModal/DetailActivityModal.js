import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { InfoField2 } from "../../Utils/InfoField";

const DetailActivityModal = ({ children }) => {
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

  const stInfo = {
    id: "2113333",
    name: "Nguyễn Văn An",
    printerId: "12345",
    location: "CS2, H6, 304",
    copies: 2,
    quantity: "A4: 10",
    date: "12-03-2020"
  }
  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="container w-[350px] md:w-[500px] p-0 rounded-lg overflow-hidden shadow-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[22px] font-bold flex items-center justify-center h-[70px] w-full">
            CHI TIẾT HOẠT ĐỘNG
          </div>
          <div className="p-2 flex items-center justify-center gap-y-2 flex-col py-4">
            <InfoField2
              fieldName={"ID sinh viên"}
              fieldValue={stInfo.id}
            ></InfoField2>
            <InfoField2
              fieldName={"Tên sinh viên"}
              fieldValue={stInfo.name}
            ></InfoField2>
            <InfoField2
              fieldName={"ID máy in"}
              fieldValue={stInfo.printerId}
            ></InfoField2>
            <InfoField2
              fieldName={"Vị trí"}
              fieldValue={stInfo.location}
            ></InfoField2>
            <InfoField2
              fieldName={"Số bản in"}
              fieldValue={stInfo.copies}
            ></InfoField2>
            <InfoField2
              fieldName={"Lượng giấy in"}
              fieldValue={stInfo.quantity}
            ></InfoField2>
            <InfoField2
              fieldName={"Ngày in"}
              fieldValue={stInfo.date}
            ></InfoField2>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default DetailActivityModal;
