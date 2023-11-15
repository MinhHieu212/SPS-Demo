import React, { useRef, useState } from "react";
import {FormInput} from "./FormInput.js"
import { number } from "yup";
import "./Config.scss"

const Config = () => {

  const [values, setValues] = useState({
    default_paper: 100,
    time_Sem1: 12,
    time_Sem2: 14,
    a4_price: 300
  });
  const inputs = [
    {
      id: 1,
      name: "default_paper",
      type: "number",
      placeholder: "defaultPaper",
      errorMessage: "Lượng giấy mặc định là số tự nhiên từ 1-1000!",
      label: "Số lượng giấy mặc định cho từng sinh viên / Học kì",
      require: true,
    },
    {
      id: 2,
      name: "time_Sem1",
      type: "date",
      placeholder: "timeSem1",
      errorMessage: "",
      label: "Thời gian cấp giấy Học kì 1",
      require: true,
    },
    {
      id: 3,
      name: "time_Sem2",
      type: "date",
      placeholder: "timeSem2",
      errorMessage: "",
      label: "Thời gian cấp giấy Học kì 2",
      require: true,
    },
    {
      id: 4,
      name: "a4_price",
      type: "number",
      placeholder: "a4Price",
      errorMessage: "Giá một tờ A4 không nên vượt quá 2000đ",
      label: "Giá của một tờ giấy A4 khi mua thêm",
      require: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  return (
    <div className="Config max-w-[1280px] px-[15px] md:px-[32px] lg:px-[70px] mx-auto mb-5 bg-[#E5E5E5] shadow-sm min-h-[93vh]">
      <h1 className="text-3xl lg:text-4xl font-semibold mt-4 border-b-4 border-black pb-2 md:pb-3">
        CẤU HÌNH HỆ THỐNG
      </h1>
      <div className="Form_quanlyvatlieu flex item-center justify-center bg-red justify-between">
        <form onSubmit={handleSubmit}>
        <h2 className="text-xl lg:text-2xl font-semibold mt-4 border-b-4 pb-2 md:pb-3">Quản lý Vật Liệu Học Tập và Cấp Phát Tài Liệu</h2>
          {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button className="Submit">Áp dụng</button>
          <button className="Todefault">Mặc định</button>
        </form>
      </div>
      
    </div>
  );
};

export default Config;
