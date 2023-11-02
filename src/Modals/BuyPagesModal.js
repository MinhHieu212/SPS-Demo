import React, { useState } from "react";
import CenterModal from "./CenterModal";
import "./BuyPagesModal.scss";

const BuyPagesModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const [value, setValue] = useState(0);

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const incrementValue = () => {
    if (value < 1000) {
      setValue(value + 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue <= 999 && newValue >= 0) {
      setValue(newValue);
    }
  };

  const handleAccept = () => {
    console.log(value);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="containerModal w-[380px] md:w-[600px] mx-auto overflow-hidden rounded-lg bg-white">
          <div className="Title text-[24px] text-white pt-2 font-bold text-center border-b-2 border-gray-400  pb-2 bg-[#3C8DBC]">
            Bạn muốn mua thêm giấy in?
            <p className="text-[16px] ">Chọn số lượng tờ A4 bạn muốn mua</p>
          </div>
          <div className="flex gap-3 items-center justify-center my-3 border-b-2 border-gray-400 pb-2 pt-4">
            <button
              className="p-2 outline-none border-2 border-gray-500 rounded-lg"
              onClick={decrementValue}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1665 10H15.8332"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="numberInput py-2 w-[150px] md:w-[200px] text-center font-bold text-[100px] text-black rounded-lg  outline-none"
            />
            <button
              className="p-2 outline-none border-2 border-gray-500 rounded-lg"
              onClick={incrementValue}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <div className="mb-2 flex justify-between px-10">
              <span className="text-[#066DCC] text-[20px] font-bold mr-3">
                Giá mỗi tờ:
              </span>
              <span className="text-[20px] font-semibold leading-7">
                1000 VNĐ
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 flex justify-between px-10">
              <span className="text-[#066DCC] text-[20px] font-bold mr-3">
                Thành tiền:
              </span>
              <span className="text-[20px] font-semibold leading-7">
                {`${value * 1000}  VNĐ`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-3">
            <button
              className="bg-[#B4AFAF] p-3 w-[40%] block rounded-lg text-[16px] font-semibold text-white"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button
              className="bg-[#1488DB] p-3 w-[40%] block rounded-lg text-[16px] font-semibold text-white"
              onClick={handleAccept}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default BuyPagesModal;
