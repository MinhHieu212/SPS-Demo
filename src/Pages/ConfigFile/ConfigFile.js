import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FileIcon } from "../../Assets/Icons/Icons";

const ConfigFile = () => {
  const { PrinterID } = useParams();
  const [printerInfo, setPrinterInfo] = useState({
    id: PrinterID,
    localtion: "CS1-H6",
    room: "402",
    queue: "5",
  });
  const [files, setFiles] = useState(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file, index) => {
      return {
        file: file,
        quantity: 0,
        pageType: "",
        color: "",
        direct: "",
        typePrint: "",
      };
    });

    setFiles((prevFiles) =>
      Array.isArray(prevFiles) ? [...prevFiles, ...newFiles] : newFiles
    );
  };

  const removeFile = (fileName) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== fileName)
    );
  };

  return (
    <div className="configFile max-w-[1280px] px-[10px] md:px-[32px] lg:px-[70px] w-full mx-auto bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <h2 className="w-full text-[#066DCC] text-3xl lg:text-4xl font-semibold mt-4 printing-title border-b-4 border-black pb-2 md:pb-3">
        CẤU HÌNH FILE IN
      </h2>

      <div className="InfoPrinter text-[15px] md:text-[20px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[24px]">
          Thông tin máy in
        </div>

        <div className="flex items-center justify-between flex-wrap w-[100%] gap-2 mt-3 lg:w-[80%]">
          <div>
            <span className="text-[#1488DB] mr-2">ID máy in:</span>
            <span className="">{printerInfo.id}</span>
          </div>
          <div>
            <span className="text-[#1488DB] mr-2">Vị trí tòa:</span>
            <span className="">{printerInfo.localtion}</span>
          </div>
          <div>
            <span className="text-[#1488DB] mr-2">Phòng in:</span>
            <span className="">{printerInfo.room}</span>
          </div>
          <div>
            <span className="text-[#1488DB] mr-2">Hàng đợi:</span>
            <span className="">{printerInfo.queue} yêu cầu</span>
          </div>
        </div>
      </div>

      <div className="UploadFile text-[15px] md:text-[20px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[24px]">
          Tải tệp in
        </div>

        <div className="flex items-center justify-evenly lg:w-[80%] w-[100%] mt-3">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-[100%] px-[20px] h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white overflow-x-scroll
              "
            >
              <div className="flex flex-col items-center justify-center ">
                {files === null ? (
                  <>
                    <svg
                      className="w-10 h-10 mb- text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>

                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full px-2 flex items-center justify-center gap-x-3">
                      {files?.map((file, index) => {
                        return (
                          <FileIcon
                            fileName={file.file.name}
                            key={index}
                          ></FileIcon>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <input
                id="dropzone-file"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="CongifFile text-[15px] md:text-[20px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[24px]">
          Cấu hình in
        </div>

        <div className="flex flex-col items-center justify-evenly w-[100%] lg:w-[80%] mt-3">
          <div className="w-full flex-col md:flex-row  items-center justify-between">
            <span className="text-[#1488DB] mr-5">Tên têp</span>

            <select
              name="files"
              id="files"
              className="w-[100%] md:w-[90%] border-2 border-gray-400 rounded-sm p-2"
            >
              {files?.map((file, index) => {
                return (
                  <option value={file.file.name} key={index} className="p-2">
                    <span className="w-[300px] overflow-hidden">
                      {file.file.name}{" "}
                    </span>
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="w-[45%]">
              <p className="text-[#1488DB]">Số bản in</p>

              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={0}
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              ></input>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB]">Kích thước giấy</p>

              <select
                name="quantity"
                id="quantity"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              >
                <option value="">A3</option>
                <option value="">A4</option>
              </select>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="w-[45%]">
              <p className="text-[#1488DB]">Màu sắc in</p>

              <select
                name="quantity"
                id="quantity"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              >
                <option value="">In thường</option>
                <option value="">In màu</option>
              </select>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB]">Hướng giấy in</p>

              <select
                name="quantity"
                id="quantity"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              >
                <option value="">In dọc</option>
                <option value="">In ngang</option>
              </select>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="w-[45%]">
              <p className="text-[#1488DB]">Bố cục in</p>
              <select
                name="quantity"
                id="quantity"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              >
                <option value="">1 trang trên 1 tờ</option>
                <option value="">2 trang trên 1 tờ</option>
                <option value="">4 trang trên 1 tờ</option>
                <option value="">8 trang trên 1 tờ</option>
              </select>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB]">Cách in</p>
              <select
                name="quantity"
                id="quantity"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-sm p-2"
              >
                <option value="">1 mặt</option>
                <option value="">2 mặt</option>
              </select>
            </div>
          </div>

          <div className="w-full  flex flex-col items-center justify-between mt-3">
            <p className="text-[#1488DB] w-full">Chọn trang in:</p>

            <div className="w-full flex flex-col md:flex-row items-center justify-between mt-2">
              <div className="w-[90%] md:w-[45%]">
                <span>In từ:</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="w-[20%] md:w-[30%] ml-3 px-[20px] rounded-sm"
                />
                <span className="ml-3">đến:</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="w-[20%] md:w-[30%] ml-3 px-[20px] rounded-sm"
                />
              </div>

              <div className="w-[90%] md:w-[45%] flex items-center mt-3 md:mt-0">
                <input type="checkbox" id="All" className="w-[20px] h-[20px]" />
                <label
                  htmlFor="All"
                  className="font-bold text-[15px] md:text-[20px] ml-3"
                >
                  In tất cả
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-5 items-center justify-end gap-2">
            <button
              className="px-5 bg-[#066DCC] rounded-[5px] text-white font-bold text-center h-[50px]"
              onClick={() => console.log(files)}
            >
              Gửi yêu cầu in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigFile;
