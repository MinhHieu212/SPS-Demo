import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { InfoField2 } from "../../Utils/InfoField";

const DetailHistoryModal = ({ children, props, total_pages }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="container w-[350px] md:w-[550px] p-0 rounded-lg overflow-hidden shadow-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            CHI TIẾT IN ẤN
          </div>
          <div className="p-2 flex items-center justify-center gap-y-2 flex-col py-4">
            <InfoField2
              fieldName={"ID máy in"}
              fieldValue={props.printerId}
            ></InfoField2>
            <InfoField2
              fieldName={"Vị trí"}
              fieldValue={props.position}
            ></InfoField2>
            <InfoField2
              fieldName={"Ngày in"}
              fieldValue={props.date}
            ></InfoField2>
            <InfoField2
              fieldName={"Trạng thái"}
              fieldValue={props.status}
            ></InfoField2>
            <InfoField2
              fieldName={"Tên file"}
              fieldValue={props.fileName}
            ></InfoField2>
            <InfoField2
              fieldName={"Số bản in:"}
              fieldValue={props.numVersion}
            ></InfoField2>
            <InfoField2
              fieldName={"Lượng giấy in"}
              fieldValue={props.paperSize + ": " + props.total_pages}
            ></InfoField2>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default DetailHistoryModal;
