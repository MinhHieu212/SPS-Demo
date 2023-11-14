import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";

const RemoveFileModal = ({ files, removeFile, children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[400px] overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[16px] md:text-[20px] font-bold flex items-center justify-center h-[60px] w-full capitalize">
            CLICK CHỌN TỆP ĐỂ XÓA
          </div>
          <div className="flex flex-col items-center justify-center my-3 w-full">
            <div className="w-full h-full px-2 flex flex-col items-center justify-start gap-x-3 overflow-y-scroll gap-y-1">
              {files?.map((file, index) => {
                return (
                  <div
                    key={index}
                    className="px-3 p-2 w-[90%] bg-[#e6e6e6] rounded-md truncate overflow-clip border-[1px] border-[#367FA9]"
                    onClick={() => removeFile(file.file.name)}
                  >
                    {file.file.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default RemoveFileModal;
