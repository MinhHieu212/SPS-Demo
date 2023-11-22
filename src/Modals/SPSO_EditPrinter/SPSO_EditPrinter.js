import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";

const SPSOEditPrinterModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const [tabActivated, setTabActivated] = useState(1);
  const info = {
    id: "12345",
    brand: "Canon",
    type: "PIXMA E4750",
    location: "CS2, H6, 304",
    description: "Tốc độ in tiêu chuẩn ISO (A4): 3.9 ipm đen/màu",
  };
  const [brand, setBrand] = useState(info.brand);
  const [type, setType] = useState(info.type);
  const [location, setLocation] = useState(info.location);
  const [desc, setDesc] = useState(info.description);
  const [checked, setChecked] = useState("active");
  const handleSubmit = () => {
    console.log(brand, type, location, desc, checked);
  };
  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] min-h-[581px] md:min-h-[610px]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            THÔNG TIN MÁY IN VÀ TÙY CHỈNH
          </div>
          <div className="flex items-center justify-center text-[16px] md:text-[20px] font-semibold">
            <div
              className={`${
                !tabActivated
                  ? "border-[#1488db] text-black"
                  : "text-[#7d7b7b] border-white"
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer`}
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
              } w-1/2 text-center py-[10px] text-[16px] lg:text-[18px] border-b-4 cursor-pointer`}
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
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
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
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
              <div className="flex flex-col">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[124px] mb-[8px]">
                  Trạng thái:{" "}
                </p>
                <div className="flex flex-row items-end ">
                  <div>
                    <div className="flex items-center mb-[4px] gap-[22px]">
                      <input
                        checked={checked == "enable"}
                        id="statusEnable"
                        type="radio"
                        name="printerStatus"
                        onClick={() => setChecked("enable")}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        onClick={() => setChecked("enable")}
                        htmlFor="statusEnable"
                        className="text-[16px] md:text-[20px] font-semibold p-0"
                      >
                        Hoạt động
                      </label>
                    </div>
                    <div className="flex items-center gap-[22px]">
                      <input
                        checked={checked == "disable"}
                        id="statusDisable"
                        type="radio"
                        name="printerStatus"
                        onClick={(e) => setChecked("disable")}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label
                        onClick={(e) => setChecked("disable")}
                        htmlFor="statusDisable"
                        className="text-[16px] md:text-[20px] font-semibold p-0"
                      >
                        Không hoạt động
                      </label>
                    </div>
                  </div>
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
                  {info.id}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Nhãn hiệu:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.brand}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mẫu máy:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.type}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Vị trí:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.location}
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-[90px] mb-[22px]">
                <p className="text-[#066DCC] text-[16px] md:text-[20px] font-bold w-[80px] md:w-[124px]">
                  Mô tả:{" "}
                </p>
                <p className="text-black text-[16px] md:text-[20px] font-semibold">
                  {info.description}
                </p>
              </div>
              <div className="flex flex-row justify-end mt-[90px]">
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
