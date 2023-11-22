import React, { useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import "./PagesPurchaseModal.scss";
import { useNavigate } from "react-router-dom";
import { confirmPayment } from "../../APIs/BKPayAPI/BKPayAPI";

const PagesPurchaseModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

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
    console.log("new value", newValue);
    isNaN(newValue) ? setValue(0) : null;
    if (!isNaN(newValue) && newValue <= 999 && newValue >= 0) {
      setValue(newValue);
    }
  };

  const handleAccept = async () => {
    const data = { money: value * 1000 };

    // console.log("Data sent to confirm purchase pages ", data);

    await confirmPayment(data);

    setTimeout(() => {
      navigate("/Bkpay");
    }, 1000);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children} </div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="containerModal w-[380px] md:w-[450px] mx-auto overflow-hidden rounded-lg bg-white border-[1px] border-[#367FA9]">
          <div className="Title  md:text-[20px] text-white pt-2 font-bold text-center border-b-2 border-gray-400  pb-2 bg-[#3C8DBC]">
            Bạn muốn mua thêm giấy in?
            <p className="text-[16px] ">Chọn số lượng tờ A4 bạn muốn mua</p>
          </div>
          <div className="flex gap-3 items-center justify-center border-b-2 border-gray-400 ">
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
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="numberInput py-2 w-[150px] md:w-[200px] text-center font-bold text-[100px] text-black rounded-lg outline-none border-none"
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
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="text-center mt-2">
            <div className="mb-2 flex justify-between px-10">
              <span className="text-[#066DCC] text-[18px] font-bold mr-3">
                Giá mỗi tờ:
              </span>
              <span className="text-[18px] font-semibold leading-7">
                1000 VNĐ
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 flex justify-between px-10">
              <span className="text-[#066DCC] text-[18px] font-bold mr-3">
                Thành tiền:
              </span>
              <span className="text-[18px] font-semibold leading-7">
                {`${value * 1000}  VNĐ`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2 mb-3">
            <button
              className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949] py-[12px] w-[40%] block rounded-lg text-[16px] font-semibold text-white"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button
              className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  py-[12px] w-[40%] block rounded-lg text-[16px] font-semibold text-white "
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

export default PagesPurchaseModal;
