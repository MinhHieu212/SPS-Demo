import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Config.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { ConfigAPI, SendConfigAPI } from "../../APIs/ConfigAPI/ConfigAPI";
import format from "date-fns/format";
import { toast } from "../../Utils/Toastify";
import ConfirmConfigSystemModal from "../../Modals/ConfirmConfigSystemModal/ConfirmConfigSystemModal";

const Config = () => {
  const [formInfo, setFormInfo] = useState([]);

  const [infoSend, setInfoSend] = useState({
    currentBalance: 0,
    startDate1: "",
    startDate2: "",
    currentA4Price: 0,
    currentFileType: [],
    isDefault: false,
  });

  const [curpag_input, setCurpag_input] = useState();
  const [stday1_input, setStday1_input] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [stday2_input, setStday2_input] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [curprice_input, setCurprice_input] = useState();
  const [deffileTypes, setDefFileTypes] = useState([]);
  const [curfileTypes, setCurfileTypes] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const handleCallApi = async () => {
      const response = await ConfigAPI();
      // console.log("reponse from Conf api: ", response);

      setFormInfo(response?.data?.data);
      setCurpag_input(response?.data?.data.currentBalance);
      setStday1_input(response?.data?.data.startDate1.split("T")[0]);
      setStday2_input(response?.data?.data.startDate2.split("T")[0]);
      setCurprice_input(response?.data?.data.currentA4Price);

      setDefFileTypes(response?.data?.data.defaultFileType);
      setCurfileTypes(response?.data.data.currentFileType);
    };
    handleCallApi();

    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, []);

  useEffect(() => {
    setInfoSend(formInfo);
    setInfoSend((prevData) => ({
      ...prevData,
      startDate1: stday1_input,
      startDate2: stday2_input,
    }));
  }, [formInfo]);

  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (errorMessage) {
      const timerId = setTimeout(() => {
        setErrorMessage(null);
      }, 2000);

      // Cleanup the timer when the component unmounts or when the errorMessage changes
      return () => clearTimeout(timerId);
    }
  }, [errorMessage]);

  // Submitting
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const response = await SendConfigAPI(infoSend);
    console.log("reponse send to api: ", response.data);
    toast.success("Cập nhật thành công cấu hình cho hệ thống!");
  };

  // Setting default
  const setDefault = () => {
    setCurpag_input(formInfo?.defaultBalance);
    setStday1_input(formInfo?.startDate1.split("T")[0]);
    setStday2_input(formInfo?.startDate2.split("T")[0]);
    setCurprice_input(formInfo?.defaultA4Price);
    setCurfileTypes(formInfo.defaultFileType);

    setInfoSend((prevData) => ({
      ...prevData,
      startDate1: formInfo?.startDate1,
      startDate2: formInfo?.startDate2,
      isDefault: true,
    }));
  };

  const updateInputType = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleAdd = (val) => {
    if (val !== "") {
      if (!curfileTypes.some((element) => element === val)) {
        setCurfileTypes([...curfileTypes, val]);
        setInfoSend((prevData) => ({
          ...prevData,
          currentFileType: [...prevData.currentFileType, val],
        }));
        toast.success("Đã thêm vào danh sách loại file được phép in !");
      } else {
        setErrorMessage("Loại file đã tồn tại.");
        toast.error("Loại file đã tồn tại !");
      }
    }
  };

  const handleDelete = (ftype) => {
    const newCurfileTypes = curfileTypes.filter((item) => item !== ftype);
    setCurfileTypes(newCurfileTypes);
    const updatedCurrentFileType = infoSend.currentFileType.filter(
      (item) => item !== ftype
    );
    setInfoSend((prevData) => ({
      ...prevData,
      currentFileType: updatedCurrentFileType,
    }));
  };

  return (
    <div className="Config max-w-[1280px] px-[10px] md:px-[20px] mx-auto pb-5 bg-white shadow-sm min-h-[93vh]">
      <h1 className="text-2xl lg:text-3xl text-[#066dcc] font-semibold mt-3 border-b-4 border-[#066dcc] pb-2 md:pb-3">
        CẤU HÌNH HỆ THỐNG
      </h1>
      <div className="Form_quanlyvatlieu flex item-center justify-center bg-cover bg-center mx-auto my-10 border-[#066dcc] ">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] shadow-xl border-1 border-[#1488db70]  py-0 px-3 w-full md:w-[570px]"
        >
          <h2 className="text-xl lg:text-2xl text-[#1488DB] text-center font-semibold mt-4 border-b-2 border-[#1488DB] pb-2 md:pb-3 mb-2 md:mb-6">
            Quản lý Vật Liệu Học Tập và Cấp Phát Tài Liệu
          </h2>
          <div className="formInput flex flex-col ">
            <label className="text-[16px] lg:text-[18px] ">
              Số lượng giấy mặc định cho từng sinh viên / Học kì
            </label>
            <div className="w-[27%] ">
              <input
                placeholder="Nhập số..."
                className="inline border-1 border-[#1488DB] rounded-md"
                onChange={(e) => {
                  const numericValue = parseFloat(e.target.value);
                  setCurpag_input(numericValue);
                  setInfoSend((prevData) => ({
                    ...prevData,
                    currentBalance: numericValue,
                  }));
                }}
                value={curpag_input}
                type="number"
                required
                min="1"
                max="2000"
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
              />
            </div>
            <span className="Err">{errorMessage}</span>
          </div>
          <div className="flex flex-row item-center justify-start md:gap-[32px] gap-[16px]">
            <div className="formInput flex flex-col float-left">
              <label className="TG1 text-[16px] lg:text-[18px] ">
                Thời gian cấp giấy Học kì 1
              </label>
              <div>
                <input
                  className="inline border-1 border-[#1488DB] rounded-md"
                  type="date"
                  name="date"
                  id="datepicker1"
                  required
                  onChange={(e) => {
                    const dayValue = format(
                      new Date(e.target.value),
                      "yyyy-MM-dd"
                    );
                    setStday1_input(dayValue);
                    setInfoSend((prevData) => ({
                      ...prevData,
                      startDate1: dayValue,
                    }));
                  }}
                  value={stday1_input}
                />
              </div>
              <span className="Err">{errorMessage}</span>
            </div>

            <div className="formInput flex flex-col float-left col-span-1 sm:col-span-1 ml-0 sm:ml-4 md:ml-8 ">
              <label className="TG2 text-[16px] lg:text-[18px] ">
                Thời gian cấp giấy Học kì 2
              </label>
              <div>
                <input
                  className="inline border-1 border-[#1488DB] rounded-md"
                  type="date"
                  name="date"
                  id="datepicker2"
                  required
                  onChange={(e) => {
                    const dayValue = format(
                      new Date(e.target.value),
                      "yyyy-MM-dd"
                    );
                    setStday2_input(dayValue);
                    setInfoSend((prevData) => ({
                      ...prevData,
                      startDate2: dayValue,
                    }));
                  }}
                  value={stday2_input}
                />
              </div>
              <span className="Err">{errorMessage}</span>
            </div>
          </div>
          <div className="formInput flex flex-col w-[100%]">
            <label className="text-[16px] lg:text-[18px] ">
              Giá của một tờ giấy A4 khi mua thêm
            </label>
            <div class="flex flex-row items-center justify-start gap-3">
              <input
                placeholder="Nhập giá..."
                className="border-1 border-[#1488DB]  rounded-md block max-w-[120px]"
                onChange={(e) => {
                  const numericValue = parseFloat(e.target.value);
                  setCurprice_input(numericValue);
                  setInfoSend((prevData) => ({
                    ...prevData,
                    currentA4Price: numericValue,
                  }));
                }}
                value={curprice_input}
                type="number"
                required
                min="100"
                max="1000"
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
              />
              <span className="font-bold text-xl w-1/3 "> (vnđ)</span>
            </div>
            <span className="Err">{errorMessage}</span>
          </div>
          <h2 className="text-xl lg:text-2xl text-[#1488DB] font-semibold mt-4 border-b-2 border-[#1488DB] pb-2 md:pb-3">
            Cấu hình các loại file được in
          </h2>
          <div className="selectlist relative my-[1.5rem] mx-0">
            <select
              className="w-[60%] h-[2.5rem] py-0 px-2 border-1 border-[#1488DB] rounded-[0.1875rem]"
              onChange={updateInputType}
            >
              <option selected="selected" disabled="disable" value="">
                Chọn loại tệp để thêm...
              </option>
              {deffileTypes?.map((fileType, index) => {
                return (
                  <option key={index} value={fileType}>
                    {fileType}
                  </option>
                );
              })}
            </select>

            <button
              type="button"
              className="float-right w-[5.25rem] h-[2.25rem] rounded-[0.3125rem] bg-[#066dcc] text-white text-[1rem] font-bold"
              onClick={() => handleAdd(selectedValue)}
            >
              Thêm
            </button>
            {errorMessage && (
              <div className="absolute -bottom-6 left-0">{errorMessage}</div>
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
            <div className="current_list overflow-x-scroll flex flex-col">
              {(() => {
                if (curfileTypes.length === 0) {
                  return (
                    <div className="italic text-gray-400">
                      Bạn hiện chưa thêm loại file nào.
                    </div>
                  );
                }
              })()}
              {curfileTypes?.map((item, key) => {
                return (
                  <div
                    className="current_list_item bg-white justify-between bg-transparent flex flex-row my-[0.5rem] md:py-[5px] px-[1rem] border-b-[2px] border-[#1488DB]"
                    key={key}
                  >
                    <p>{item}</p>
                    <div>
                      <AiOutlineDelete
                        className="icon text-2xl cursor-pointer"
                        onClick={(e) => {
                          handleDelete(item);
                        }}
                        title="Delete?"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ConfirmConfigSystemModal handleConfigSys={handleSubmit}>
            <div className="Submit flex float-right items-center justify-center my-4 mx-[0.5rem] w-[5.25rem] h-[2.25rem] rounded-[0.3125rem] bg-[#066dcc] text-white text-[1rem] font-bold">
              Áp dụng
            </div>
          </ConfirmConfigSystemModal>
          <div
            className="Todefault flex float-right items-center justify-center my-4 mx-[0.5rem] w-[5.25rem] h-[2.25rem] rounded-[0.3125rem] bg-[#066dcc] text-white text-[1rem] font-bold"
            onClick={() => setDefault()}
          >
            Mặc định
          </div>
        </form>
      </div>
    </div>
  );
};

export default Config;
