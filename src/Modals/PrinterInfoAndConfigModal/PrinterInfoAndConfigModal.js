import React, { useEffect, useState } from "react";
import InfoField from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";
import { editPtr } from "../../APIs/StaffAPI/StaffAPI";
export const newPtr = {};
const PrinterInfoAndConfigModal = ({
  children,
  id,
  brand,
  model,
  description,
  status,
  fileType,
  setRenderList,
}) => {
  const [openModal, setOpenModal] = useState(false);
  // const [checked3, setChecked3] = useState(status === "Hoạt động" ? "enable" : "disable");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    newPtr.status = checked === "enable" ? 1 : 0;
    newPtr.printerId = id;
    const handleEditAPI = async (newData) => {
      const request = await editPtr(newData);
      setRenderList();
    };
    handleEditAPI(newPtr);

    setOpenModal(false);
  };
  const [checked, setChecked] = useState( status === "Hoạt động" ? "enable" : "disable");
  
  console.log("Trang thai may: ", checked);
  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            CẤU HÌNH CỦA MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold  ">
            <div className="flex w-full">
              <div className="w-[60%] p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Thông tin máy in
                </p>
                <InfoField fieldName={"ID máy in"} fieldValue={id}></InfoField>
                <InfoField
                  fieldName={"Nhãn hiệu"}
                  fieldValue={brand}
                ></InfoField>
                <InfoField fieldName={"Mẫu máy"} fieldValue={model}></InfoField>
                <InfoField
                  fieldName={"Mô tả"}
                  fieldValue={description}
                ></InfoField>
              </div>
              <div className="w-[40%]  p-3 md:p-4">
                <p className="font-semibold text-[20] md:text-[24px] pb-2">
                  Loại file được in
                </p>
                <div className="w-full h-[200px] flex flex-col items-center justify-start overflow-y-scroll rounded-md border-[1px] border-[#367FA9]">
                  {fileType.map((type, index) => {
                    return (
                      <div
                        className="p-2 bg-[#e9e9e9] rounded-sm text-center w-[90%] h-[50px] mt-2 border-[1px] border-[#367FA9]"
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
                  checked={checked === "enable"}
                  onChange={(e) => setChecked(e.target.value)}
                  type="radio"
                  className="w-5 h-5"
                  name="printerState5"
                  id="enable123"
                  value={"enable"}
                />
                <label
                  htmlFor="enable123"
                  className="ml-3 text-[16px] md:text-[20px] font-semibold"
                >
                  Hoạt động
                </label>
              </div>
              <div className="w-[200px] flex items-center">
                <input
                  checked={checked === "disable"}
                  onChange={(e) => setChecked(e.target.value)}
                  type="radio"
                  className="w-5 h-5"
                  name="printerState5"
                  id="disable1234"
                  value={"disable"}
                />
                <label
                  htmlFor="disable1234"
                  className="ml-3 text-[16px] md:text-[20px] font-semibold"
                >
                  Vô hiệu hóa
                </label>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-end pr-5">
              <button
                onClick={handleClick}
                className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 hover:bg-blue-300 h-[50px] p-3 w-[80%] md:w-[70%]  rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center"
              >
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
