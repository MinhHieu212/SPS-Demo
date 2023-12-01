import React, { useEffect, useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";
import { PrintingAPI } from "../../APIs/PrintingAPI/PrintingAPI";
import { toast } from "../../Utils/Toastify";
import { Loading } from "../../Assets/Icons/Icons";

const ConfirmPrintingModal = ({
  children,
  files,
  printerId,
  clearFiles,
  handleRenderPrinterInfo,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const data = {
    No_File: 0,
    numVersion: 0,
  };

  data.No_File = files?.length;

  files.forEach((file) => {
    data.numVersion += parseInt(file?.numVersion);
  });

  const formData = new FormData();
  const documents = [];

  files.forEach((file, index) => {
    const newDocument = {
      paperSize: file?.paperSize,
      numVersion: file?.numVersion,
      colorOption: file?.colorOption,
      landScapeOption: file?.landScapeOption,
      pagesPerSheet: file?.pagesPerSheet,
      numSides: file?.numSides,
    };

    documents.push(newDocument);

    formData.append("file", file?.file || null);
  });

  formData.append("documents", JSON.stringify(documents));
  formData.append("printerId", printerId);

  const handleSendRequestPrint = async () => {
    if (files?.length !== 0) {
      try {
        setIsButtonDisabled(true);

        const response = await PrintingAPI(formData);

        // console.log("Response data from printing api :", response);

        clearFiles();
        handleRenderPrinterInfo();
        toast.success("Yêu cầu in ấn đã được xác nhận!");
      } catch (error) {
        setIsButtonDisabled(false);
        // console.log("Error data from printing api :", error);

        toast.error(
          error?.response?.data?.message || "Gửi yêu cầu in ấn thất bại!"
        );
      } finally {
        setIsButtonDisabled(false);
      }
    }
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
          {isButtonDisabled ? (
            <div className="flex flex-col items-center justify-center min-h-[95px] my-3 w-full ">
              <span className="animate-spin">
                <Loading></Loading>
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[95px] my-3 w-full ">
              <InfoField
                fieldName={"Số file in"}
                fieldValue={data.No_File}
              ></InfoField>
              <InfoField
                fieldName={"Tổng số bản in"}
                fieldValue={data.numVersion}
              ></InfoField>
            </div>
          )}
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-gradient-to-br from-[#ff7d7d] outline-none cursor-pointer to-[#b84949] p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px] font-semibold text-white hover:from-[#ff5a5a] hover:to-[#9e3a3a] transition-all duration-500"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>

            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none cursor-pointer from-cyan-500 p-2 w-[40%] block rounded-lg text-[16px] md:text-[18px] font-semibold text-white hover:from-cyan-700 transition-all duration-500"
              onClick={handleSendRequestPrint}
              disabled={isButtonDisabled}
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
