import React, { useState } from "react";
import { InfoField2 } from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";

const DetailStudentLogModal = ({ children, activity }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] ">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            LỊCH SỬ IN ẤN
          </div>
          <div className="w-full h-[400px] flex justify-start py-2 gap-2 items-center flex-col overflow-y-scroll">
            {activity?.history?.map((request, index) => {
              const pageQuantity = (
                <p>
                  <span className="text-[blue]"> A4: </span>{" "}
                  <span className=" mr-3">{request.page_Quantity.A4}</span>
                  <span className="text-[blue]"> A3: </span>{" "}
                  <span> {request.page_Quantity.A3}</span>
                </p>
              );
              return (
                <div
                  className="w-[90%] rounded-md bg-[#D9D9D9] p-2 border-[1px] border-[#367FA9]"
                  key={index}
                >
                  <InfoField2
                    fieldName={"Thời gian"}
                    fieldValue={request.date}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Tên sinh viên"}
                    fieldValue={activity.studentName}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Mã sinh viên"}
                    fieldValue={activity.studentId}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Tên file in"}
                    fieldValue={request.fileNames}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Số bản in"}
                    fieldValue={request.quantity}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Lượng giấy in"}
                    fieldValue={pageQuantity}
                  ></InfoField2>
                </div>
              );
            })}
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default DetailStudentLogModal;
