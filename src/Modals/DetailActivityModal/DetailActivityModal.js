import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { InfoField2 } from "../../Utils/InfoField";

const DetailActivityModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const stInfo = {
    id: "2113333",
    name: "Nguyễn Văn An",
    printerId: "12345",
    location: "CS2, H6, 304",
    copies: 2,
    quantity: "A4: 10",
    date: "12-03-2020",
    files: ["Coluuchat.pdf", "HoaDC.pdf", "Vatli2.pdf"],
  };
  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className=" container w-[350px] md:w-[450px] p-0 rounded-lg overflow-hidden shadow-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold mb-2 flex items-center justify-center h-[60px] w-full">
            CHI TIẾT HOẠT ĐỘNG
          </div>
          <div className=" flex items-center justify-center gap-y-2 flex-col py-1">
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
              fieldName={"Số tệp in"}
              fieldValue={stInfo.files.length}
            ></InfoField2>
            <div className="px-5 text-[16px] md:text-[20px] flex items-center gap-3 w-full">
              <span className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[40%]">
                {"Tên file"}:
              </span>
              <select className="text-[16px] md:text-[20px] font-semibold leading-7 py-2 w-[60%] overflow-scroll outline-none border-1 border-black rounded-md">
                {stInfo.files.map((file, index) => (
                  <option value="" key={index}>
                    {file}
                  </option>
                ))}
              </select>
            </div>

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
