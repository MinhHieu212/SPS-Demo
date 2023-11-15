import React, { useState } from "react";
import { InfoField2 } from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";

const DetailPrinterLogModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const [logPrintings, setlogPrintings] = useState([
    {
      date: "12/2/2023",
      student_ID: "2113363",
      student_Name: "Minh Hieu",
      fileNames: ["giaitich.docx", "dstt.docx"],
      quantity: 3,
      page_Quantity: { A4: 140, A3: 0 },
    },
    {
      date: "12/2/2023",
      student_ID: "2113363",
      student_Name: "Minh Hieu",
      fileNames: ["giaitich.docx", "dstt.docx"],
      quantity: 3,
      page_Quantity: { A4: 140, A3: 0 },
    },
    {
      date: "12/2/2023",
      student_ID: "2113363",
      student_Name: "Minh Hieu",
      fileNames: ["giaitich.docx", "dstt.docx"],
      quantity: 3,
      page_Quantity: { A4: 140, A3: 0 },
    },
  ]);

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] ">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            SỐ LƯỢNG YÊU CẦU IN ẤN HIỆN TẠI
          </div>
          <div className="w-full h-[400px] flex justify-start py-2 gap-2 items-center flex-col overflow-y-scroll">
            {logPrintings.map((request, index) => {
              const pageQuantity = (
                <p>
                  <span className="text-[blue]"> A4: </span>{" "}
                  <span className=" mr-3">{request.page_Quantity.A4}</span>
                  <span className="text-[blue]"> A3: </span>{" "}
                  <span>{request.page_Quantity.A3}</span>
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
                    fieldValue={request.student_Name}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Mã sinh viên"}
                    fieldValue={request.student_ID}
                  ></InfoField2>
                  <InfoField2
                    fieldName={"Tên file in"}
                    fieldValue={request.fileNames.map((file) => `${file};  `)}
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

export default DetailPrinterLogModal;
