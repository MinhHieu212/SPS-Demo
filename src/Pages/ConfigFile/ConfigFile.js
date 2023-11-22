import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddIcon, DeleteIcon, FileIcon } from "../../Assets/Icons/Icons";
import RemoveFileModal from "../../Modals/RemoveFileModal/RemoveFileModal";
import { ConfirmPrintingModal } from "../../Modals";

const ConfigFile = () => {
  const [files, setFiles] = useState([]);
  const [indexFile, setIndexFile] = useState(0);
  const navigate = useNavigate();
  const { PrinterID } = useParams();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, []);

  const [printerInfo, setPrinterInfo] = useState({
    id: PrinterID,
    localtion: "CS1-H6",
    room: "402",
    queue: "5",
  });

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file, index) => {
      return {
        file: file,
        quantity: 1,
        pageSize: "A4",
        color: "normal",
        direct: "vertical",
        layout: "1:1",
        option: "1 side",
      };
    });

    setFiles((prevFiles) => {
      if (Array.isArray(prevFiles)) {
        const uniqueNewFiles = newFiles.filter((newFile) => {
          return !prevFiles.some(
            (prevFile) => prevFile.file.name === newFile.file.name
          );
        });

        return [...prevFiles, ...uniqueNewFiles];
      } else {
        return newFiles;
      }
    });
  };

  const removeFile = (fileName) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== fileName)
    );
  };

  return (
    <div className="configFile max-w-[1280px] px-[10px] lg:px-[20px] w-full mx-auto bg-[white] shadow-sm min-h-[93vh]">
      <h2 className="w-full text-[#066DCC] text-2xl lg:text-3xl font-semibold mt-3 printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3">
        CẤU HÌNH FILE IN
      </h2>

      <div className="InfoPrinter text-[16px] lg:text-[18px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[20px] md:mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[20px]">
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

      <div className="UploadFile text-[16px] lg:text-[18px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[20px] md:mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[20px]">
          Tải tệp in
        </div>

        <div className="flex items-center justify-evenly lg:w-[80%] w-[100%]">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col relative items-center mt-[30px] justify-center w-[100%] h-[120px] border-3 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
              <div
                className={`FilesList w-full h-full flex flex-col items-center justify-center overflow-x-scroll absolute ${
                  files?.length !== 0 ? "z-30" : ""
                }`}
              >
                {files?.length === 0 ? (
                  <div className=" flex items-center justify-center flex-col">
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
                  </div>
                ) : (
                  <div className="w-full h-full px-2 flex items-center justify-center gap-x-3 overflow-x-scroll">
                    {files?.map((file, index) => {
                      return (
                        <FileIcon
                          fileName={file.file.name}
                          key={index}
                        ></FileIcon>
                      );
                    })}
                  </div>
                )}
              </div>

              <input
                id="dropzone-file"
                type="file"
                multiple
                className="cursor-pointer absolute block opacity-0 w-full h-full z-10"
                onChange={handleFileChange}
              />

              {files?.length !== 0 && (
                <div className="absolute z-10 top-0 -translate-y-[45px] right-0 flex gap-3 items-center">
                  <label
                    htmlFor="dropzone-file"
                    className="flex gap-1 items-center justify-center"
                  >
                    <AddIcon></AddIcon>
                    <span className="text-[16px] md:text-[20px]">Thêm tệp</span>
                  </label>

                  <RemoveFileModal files={files} removeFile={removeFile}>
                    <div className="flex gap-1 items-center justify-center">
                      <DeleteIcon></DeleteIcon>
                      <span className="text-[16px] md:text-[20px]">
                        Xóa tệp
                      </span>
                    </div>
                  </RemoveFileModal>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="CongifFile text-[16px] lg:text-[18px] font-semibold bg-[#f8f9fa] rounded-lg shadow-lg relative w-full px-[24px] mt-[20px] md:mt-[30px] flex flex-col lg:flex-row justify-between items-stretch py-[20px]">
        <div className="font-bold uppercase text-[18px] md:text-[20px]">
          Cấu hình in
        </div>

        <div className="flex flex-col items-center justify-evenly w-[100%] lg:w-[80%] mt-3 mb-3">
          <div className="w-full flex-col items-center justify-between border-b-2 border-black pb-5">
            <span className="text-[#ff3434] mr-5">
              Tên tệp cấu hình hiện tại
            </span>

            <select
              disabled={files?.length === 0}
              name="files"
              id="files"
              className=" w-[100%] mx-auto border-2 border-gray-400 mt-2 rounded-md p-2"
              onChange={(e) => {
                const selectedIndex = files.findIndex(
                  (file) => file.file.name === e.target.value
                );
                setIndexFile(selectedIndex);
              }}
            >
              {files?.map((file, index) => {
                return (
                  <option value={file.file.name} key={index} className="p-2">
                    <span className="w-[300px] overflow-hidden">
                      {file.file.name}
                    </span>
                  </option>
                );
              })}
            </select>
          </div>

          <div className="w-full flex items-center justify-between mt-5">
            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Số bản in</p>

              <input
                type="number"
                name="quantity"
                id="quantity"
                value={files[indexFile]?.quantity}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].quantity = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-md p-2"
              ></input>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Kích thước giấy</p>

              <select
                name="pageSize"
                id="pageSize"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-md p-2"
                value={files[indexFile]?.pageSize}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].pageSize = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
              >
                <option value="A4">A4</option>
                <option value="A3">A3</option>
              </select>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Màu sắc in</p>

              <select
                name="color"
                id="color"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-md p-2"
                value={files[indexFile]?.color}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].color = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
              >
                <option value="normal">In thường</option>
                <option value="color">In màu</option>
              </select>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Hướng giấy in</p>

              <select
                name="direct"
                id="direct"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-md p-2"
                value={files[indexFile]?.direct}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].direct = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
              >
                <option value="vertical">In dọc</option>
                <option value="horizontal">In ngang</option>
              </select>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-3">
            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Bố cục in</p>
              <select
                name="layout"
                id="layout"
                className="w-[100%] border-2 mx-auto border-gray-400 rounded-md p-2"
                value={files[indexFile]?.layout}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].layout = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
              >
                <option value="1:1">1 trang trên 1 tờ</option>
                <option value="2:1">2 trang trên 1 tờ</option>
                <option value="4:1">4 trang trên 1 tờ</option>
              </select>
            </div>

            <div className="w-[45%]">
              <p className="text-[#1488DB] mb-2">Cách in</p>
              <select
                name="option"
                id="option"
                className="w-[100%]  mx-auto border-2 border-gray-400 rounded-md p-2"
                value={files[indexFile]?.option}
                onChange={(e) => {
                  if (files[indexFile]) {
                    const updatedFiles = [...files];
                    updatedFiles[indexFile].option = e.target.value;
                    setFiles(updatedFiles);
                  }
                }}
              >
                <option value="1 side">1 mặt</option>
                <option value="2 side">2 mặt</option>
              </select>
            </div>
          </div>

          <div className="flex w-full mt-5 items-center justify-end gap-2">
            <ConfirmPrintingModal files={files}>
              <button
                className="px-5 bg-[#066DCC] rounded-[5px] text-white font-bold text-center h-[40px] md:h-[50px]"
                onClick={() => console.log(files)}
              >
                Gửi yêu cầu in
              </button>
            </ConfirmPrintingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigFile;
