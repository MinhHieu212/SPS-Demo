import React, { useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";

const PrinterInfoAndConfigModal = ({
  children,
  PrinterProps = {
    printerId: "1234",
    brand: "Sony",
    model: "PIXMA E4750",
    desc: "Tốc độ in tiêu chuẩn ISO (A4): 3.9 ipm đen/màu",
  },
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const [printerInfo, setPrinterInfo] = useState(PrinterProps);
  const [fileTypes, setFileTypes] = useState([
    "pdf",
    "docx",
    "pptx",
    "docx",
    "pptx",
  ]);

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            CẤU HÌNH CỦA MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold  ">
            <div className="flex w-full">
              <div className="w-[60%] p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Thông tin máy in
                </p>
                <InfoField
                  fieldName={"ID máy in"}
                  fieldValue={printerInfo?.printerId}
                ></InfoField>
                <InfoField
                  fieldName={"Nhãn hiệu"}
                  fieldValue={printerInfo?.brand}
                ></InfoField>
                <InfoField
                  fieldName={"Mẫu máy"}
                  fieldValue={printerInfo?.model}
                ></InfoField>
                <InfoField
                  fieldName={"Mô tả"}
                  fieldValue={printerInfo?.desc}
                ></InfoField>
              </div>
              <div className="w-[40%]  p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Loại file được in
                </p>
                <div className="w-full h-[200px] flex flex-col items-center justify-start overflow-y-scroll border-2 border-gray-400 rounded-md">
                  {fileTypes.map((type, index) => {
                    return (
                      <div
                        className="p-2 bg-[#E6E6E6] rounded-sm text-center w-[90%] h-[100px] mt-2"
                        key={index}
                      >
                        {type}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="w-1/2 pl-5">
              <div className="w-[200px] flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="printerState"
                  id="enable"
                />
                <label
                  htmlFor="enable"
                  className="ml-3 text-[16px] md:text-[20px] font-semibold"
                  ld
                >
                  Hoạt động
                </label>
              </div>
              <div className="w-[200px] flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="printerState"
                  id="disable"
                />
                <label
                  htmlFor="disable"
                  className="ml-3 text-[16px] md:text-[20px] font-semibold"
                >
                  Vô hiệu hóa
                </label>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end pr-5">
              <button className="bg-[#1488DB] h-[50px] p-3 w-[80%] md:w-[70%]  rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default PrinterInfoAndConfigModal;
