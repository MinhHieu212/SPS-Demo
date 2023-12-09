import React, { useState, useEffect } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { editPrinter } from "../../APIs/SpsoAPI/SpsoAPI";
import { toast } from "../../Utils/Toastify";
import ReactSwitch from "react-switch";
export const newData = {
  location: {},
};

const SPSOEditPrinterModal = ({
  children,
  printerId,
  printerStatus,
  description,
  brand,
  model,
  location,
  functionRenderList,
  functionRenderList1,
}) => {
  const [checked, setChecked] = useState(printerStatus);
  const toggleState = () => {
    setChecked((curr) => (curr === "enable" ? "disable" : "enable"));
  }
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  const [tabActivated, setTabActivated] = useState(0);
  const [brandName, setBrandName] = useState(brand);
  const [type, setType] = useState(model);
  const [locationName, setLocationName] = useState(location);
  const [desc, setDesc] = useState(description);

  const handleSubmit = () => {
    //console.log(brand, type, location, desc, checked);
    newData.printerId = printerId;
    newData.location.facility = locationName.slice(0, 3);
    newData.location.department = locationName.slice(5, 7);
    newData.location.room = locationName.slice(9, 12);
    newData.brand = brandName;
    newData.model = type;
    newData.description = desc;
    newData.status = checked === "enable" ? 1 : 0;

    //handleEditAPI(newData);
    //setRenderList1(!renderList1);

    try {
      const handleEditAPI = async (newData) => {
        const request = await editPrinter(newData);
        functionRenderList();
      };
      //console.log(newData);
      handleEditAPI(newData);
      toast.success("Tùy chỉnh thông tin máy tin thành công");
      // setOpenModal(false);
    } catch (error) {
      toast.error("Tùy chỉnh thông tin máy tin thất bại");
    }
    setOpenModal(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] min-h-[581px] md:min-h-[590px]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            THÔNG TIN MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold">
            <div
              className={`${
                !tabActivated
                  ? "border-[#1488db] text-black"
                  : "text-[#7d7b7b] border-white"
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer transition-all `}
              onClick={() => {
                setTabActivated(0);
              }}
            >
              Thông tin máy in
            </div>
            <div
              className={`${
                tabActivated
                  ? "border-[#1488db] text-black"
                  : "text-[#7d7b7b] border-white"
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer transition-all`}
              onClick={() => {
                setTabActivated(1);
              }}
            >
              Tùy chỉnh
            </div>
          </div>
          {tabActivated ? (
            <div className="w-full flex flex-col justify-between md:px-[62px] px-[12px] py-[24px] mb-[16px]">
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Nhãn hiệu:{" "}
                </p>
                <div className="flex-1">
                  <input
                    type="text"
                    className="block w-full"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mẫu máy:{" "}
                </p>
                <div className="flex-1">
                  <input
                    type="text"
                    className="block w-full"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Vị trí:{" "}
                </p>
                <div className="flex-1">
                  <input
                    type="text"
                    className="block w-full"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px] mb-[16px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mô tả:{" "}
                </p>
                <div className="flex-1 w-full">
                  <textarea
                    className="h-[84px] w-full border border-black rounded-md p-2 resize-none"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start w-1/2 gap-2 md:gap-3">
                <p className="text-[#066DCC] w-full flex text-[16px] md:text-[20px] font-bold mb-[8px]">
                  Trạng thái:{" "}
                </p>
                <div className="flex flex-row justify-start md:gap-4 gap-2 w-full">
                {checked === "enable" ? 
                <p className="text-[#066DCC] flex text-[16px] md:text-[20px] font-bold w-1/2 mb-[8px]">
                Hoạt động{" "}
                </p> : <p className="text-red-500 flex italic text-[16px] md:text-[20px] font-bold w-1/2 mb-[8px]">
                      Vô hiệu hóa{" "}
                </p>}

                <div className="switch flex">
                  <ReactSwitch onChange={toggleState} checked={checked === "enable"}/>
                </div>
              </div>
            </div>
                <div className="flex flex-col items-end justify-end">
                  <button
                    onClick={handleSubmit}
                    className="ml-auto bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500 hover:bg-blue-300 p-2 w-[154px] rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center"
                  >
                    Hoàn tất
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-between md:px-[62px] px-[12px] py-[24px] mb-[20px]">
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  ID máy in:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {printerId}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Nhãn hiệu:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {brandName}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mẫu máy:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {type}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Vị trí:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {locationName}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mô tả:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {description}
                </p>
              </div>
              <div className="flex flex-row justify-end mt-[133px] md:mt-[121px]">
                <button className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949]  p-2 w-[154px] rounded-lg text-[16px] md:text-[20px]  font-semibold text-white flex items-center justify-center">
                  Xóa máy in
                </button>
              </div>
            </div>
          )}
        </div>
      </CenterModal>
    </>
  );
};

export default SPSOEditPrinterModal;
