import React, { useState } from "react";
import BaseModal from "../Modal/BaseModal";
import "./BpagasModal.scss";

const BpagasModal = ({ open, handleClose }) => {
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
    <BaseModal open={open} handleClose={handleClose}>
      <div className="containerModal w-[700px]">
        <div className="Title text-[24px] font-bold text-center my-3 border-b-2 border-black pb-2">
          Bạn muốn mua thêm giấy in?
          <p className="text-[16px] text-[#475467]">
            Chọn số lượng tờ A4 bạn muốn mua
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center my-3 border-b-2 border-black pb-2">
          <button
            className="p-3 outline-none border-2 border-gray-500 rounded-lg"
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
            className="numberInput py-2 w-[200px] text-center font-bold text-[100px] text-black rounded-lg  outline-none"
          />
          <button
            className="p-3 outline-none border-2 border-gray-500 rounded-lg"
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
    </BaseModal>
  );
};

export default BpagasModal;
