import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Config.scss";
import { AiOutlineDelete } from "react-icons/ai";

const Config = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Error");
    }
  }, []);
  // Attributes for the first form
  const [values, setValues] = useState({
    default_paper: 100,
    time_Sem1: "22-12-2021",
    time_Sem2: "22-12-2022",
    a4_price: 300,
  });
  const inputs = [
    {
      id: 1,
      name: "default_paper",
      type: "number",
      placeholder: "Nhập số...",
      errorMessage: "Lượng giấy mặc định là số tự nhiên từ 1-1000!",
      label: "Số lượng giấy mặc định cho từng sinh viên / Học kì",
    },
    {
      id: 2,
      name: "time_Sem1",
      type: "date",
      placeholder: "timeSem1",
      errorMessage: "",
      label: "Thời gian cấp giấy Học kì 1",
    },
    {
      id: 3,
      name: "time_Sem2",
      type: "date",
      placeholder: "timeSem2",
      errorMessage: "",
      label: "Thời gian cấp giấy Học kì 2",
    },
    {
      id: 4,
      name: "a4_price",
      type: "number",
      placeholder: "Nhập giá...",
      errorMessage: "Giá một tờ A4 không nên vượt quá 2000đ",
      label: "Giá của một tờ giấy A4 khi mua thêm",
    },
  ];
  const handleSubmit = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const setDefault = () => {
    setValues({
      default_paper: 100,
      time_Sem1: new Date("09-22-2021"),
      time_Sem2: new Date("09-22-2021"),
      a4_price: 300,
    });
  };

  // Attributes for the second form
  const [allItem, setAllItem] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const updateInputType = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleAdd = (val) => {
    if (val !== "") {
      if (!allItem.some((element) => element.fileType === val)) {
        let newitem = {
          id: allItem.length === 0 ? 1 : allItem[allItem.length - 1].id + 1,
          fileType: selectedValue,
        };
        setAllItem([...allItem, newitem]);
      } else {
        setErrorMessage("Loại file đã tồn tại.");
      }
    }
  };

  const handleDelete = (id) => {
    const newAllItem = allItem.filter((item) => item.id !== id);
    setAllItem(newAllItem);
  };
  return (
    <div className="Config max-w-[1280px] px-[10px] md:px-[20px] mx-auto pb-5 bg-white shadow-sm min-h-[93vh]">
      <h1 className="text-2xl lg:text-3xl text-[#066dcc] font-semibold mt-4 border-b-4 border-[#066dcc] pb-2 md:pb-3">
        CẤU HÌNH HỆ THỐNG
      </h1>
      <div className="Form_quanlyvatlieu flex item-center justify-center bg-cover bg-center mx-auto my-10 border-[#066dcc] ">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] shadow-lg py-0 px-2 lg:px-[3.75rem] w-[330px] md:w-[570px]"
        >
          <h2 className="text-xl lg:text-2xl text-[#1488DB] text-center font-semibold mt-4 border-b-2 border-[#1488DB] pb-2 md:pb-3 mb-2 md:mb-6">
            Quản lý Vật Liệu Học Tập và Cấp Phát Tài Liệu
          </h2>
          <div className="formInput flex flex-col ">
            <label className="text-[16px] lg:text-[18px] ">
              {inputs[0].label}
            </label>
            <div className="w-[27%] ">
              <input
                placeholder={inputs[0].placeholder}
                className="inline border-1 border-[#1488DB] rounded-md"
                onChange={onChange}
              />
            </div>
            <span className="Err">{errorMessage}</span>
          </div>

          <div className="formInput flex flex-col float-left">
            <label className="text-[16px] lg:text-[18px] ">
              {inputs[1].label}
            </label>
            <div>
              <input
                className="inline border-1 border-[#1488DB] rounded-md"
                type="date"
                name="date"
                id="datepicker"
                required
                onChange={onChange}
              />
            </div>
            <span className="Err">{errorMessage}</span>
          </div>

          <div className="formInput flex flex-col float-left">
            <label className="text-[16px] lg:text-[18px] ">
              {inputs[2].label}
            </label>
            <div>
              <input
                className="inline border-1 border-[#1488DB] rounded-md"
                type="date"
                name="date"
                id="datepicker"
                required
                onChange={onChange}
              />
            </div>
            <span className="Err">{errorMessage}</span>
          </div>

          <div className="formInput flex flex-col w-[100%]">
            <label className="text-[16px] lg:text-[18px] ">
              {inputs[3].label}
            </label>
            <div>
              <input
                placeholder={inputs[3].placeholder}
                onChange={onChange}
                className="inline border-1 border-[#1488DB]  rounded-md"
              />
              <span className="font-bold text-xl w-1/3 "> (vnđ)</span>
            </div>
            <span className="Err">{errorMessage}</span>
          </div>
          <button
            className="Submit flex float-right items-center justify-center my-4 mx-[0.5rem]"
            type="submit"
          >
            Áp dụng
          </button>
          <button
            className="Todefault flex float-right items-center justify-center my-4 mx-[0.5rem]"
            type="button"
            onClick={() => setDefault}
          >
            Mặc định
          </button>
        </form>
      </div>

      <div className="Form_fileduocphep flex item-center justify-center bg-cover bg-center mx-auto my-10">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] shadow-lg py-0 px-2 lg:px-[3.75rem] w-[330px] md:w-[570px] h-[27rem]"
        >
          <h2 className="text-xl lg:text-2xl text-[#1488DB] font-semibold mt-4 border-b-2 border-[#1488DB] pb-2 md:pb-3">
            Cấu hình các loại file được in
          </h2>
          <div className="selectlist relative my-[1.5rem] mx-0">
            <select
              className="w-[60%] h-[2.5rem] py-0 px-2 border-1 border-[#1488DB] rounded-[0.1875rem]"
              onChange={updateInputType}
            >
              <option selected="true" disabled="disable" value="">
                Chọn loại tệp để thêm...
              </option>
              <option value=".pptx">.pptx</option>
              <option value=".pdf">.pdf</option>
              <option value=".png">.png</option>
              <option value=".doc">.doc</option>
              <option value=".docx">.docx</option>
              <option value=".jpg">.jpg</option>
              <option value=".xlsx">.xlsx</option>
            </select>

            <button
              className="float-right"
              type="submit"
              onClick={() => handleAdd(selectedValue)}
            >
              Thêm
            </button>
            {errorMessage && (
              <div className="absolute -bottom-6 left-0">
                {errorMessage}
                {setTimeout(() => {
                  setErrorMessage(null);
                }, 2000)}
              </div>
            )}
          </div>

          <h3 className="text-[16px] lg:text-[18px] font-semibold mt-4 mb-2 pb-2 md:pb-3 relative">
            <span className="border-b-2 border-black">
              Loại file được phép in trong hệ thống
            </span>
          </h3>
          <div
            className="currentlist_wrapper scroll shadow-md rounded-md h-[400px] border-1 border-[#1488DB] overflow-x-scroll mb-[1.3125rem]"
            style={{ overflowY: "auto", maxHeight: "12rem" }}
          >
            <div className="current_list overflow-x-scroll  flex flex-col">
              {(() => {
                if (allItem.length === 0) {
                  return (
                    <div className="italic text-gray-400">
                      Bạn hiện chưa thêm loại file nào.
                    </div>
                  );
                }
              })()}
              {allItem.map((item, key) => {
                return (
                  <div
                    className="current_list_item bg-white justify-between bg-transparent flex flex-row my-[0.5rem] md:py-[5px] px-[1rem] border-b-[2px] border-[#1488DB]"
                    key={key}
                  >
                    <p>{item.fileType}</p>
                    <div>
                      <AiOutlineDelete
                        className="icon text-2xl cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                        title="Delete?"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Config;
