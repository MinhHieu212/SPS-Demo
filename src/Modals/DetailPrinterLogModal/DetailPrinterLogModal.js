import React, { useState } from "react";
import { InfoField2, InfoFieldStatus } from "../../Utils/InfoField";
import CenterModal from "../BaseModals/CenterModal";
import { FilterModalIcon } from "../../Assets/Icons/Icons";
import { PrinterhistoryLogsSkeleton } from "../../Utils/Skeleton";
import { convertTime } from "../../Utils/Time";
export const date = {
  startDate: null,
  endDate: null,
};
const DetailPrinterLogModal = ({ children, printerLogs, id, cbGetLog }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const handleClose = () => {
    setDate1(null);
    setDate2(null);
    date.startDate = null;
    date.endDate = null;
    setOpenModal(false);
    setOpenFilter(false);
  };

  const applyFilter = async () => {
    date.startDate = date1;
    date.endDate = date2;
    cbGetLog({
      printerId: id,
      startDate: date.startDate,
      endDate: date.endDate,
    });
    setOpenFilter(false);
  };

  const cancelFilter = async () => {
    setDate1(null);
    setDate2(null);
    date.startDate = null;
    date.endDate = null;
    setOpenFilter(false);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal
        open={openModal}
        handleClose={handleClose}
        filterIcon={<FilterModalIcon></FilterModalIcon>}
        handleFilterOpen={() => setOpenFilter(!openFilter)}
      >
        <div className="w-[380px] md:w-[550px] mx-auto overflow-hidden rounded-lg border-[1px] border-[#367FA9] ">
          <div className="header bg-[#3C8DBC] text-white text-[20px] pt-1 font-bold flex items-center justify-center h-[60px] w-full">
            LỊCH SỬ IN ẤN
          </div>
          <div className="w-full h-[470px] flex justify-start py-2 gap-2 items-center flex-col overflow-y-scroll">
            {openFilter ? (
              <div className="w-full h-full flex flex-col">
                <div className="bg-white  h-[250px] mt-5 rounded-md flex-col flex items-center  shadow-md w-[90%] gap-2 mx-auto border-[1px] border-[#367FA9]">
                  <div className="text-[#1488DB] uppercase  border-b-[3px] border-[#367FA9] h-[40px] flex items-center justify-center font-bold w-full my-2 text-[18px]">
                    Khoảng thời gian
                  </div>
                  <div className="flex items-center w-full px-3 justify-between">
                    <span className="mr-2 text-[18px] font-bold">Từ</span>
                    <input
                      value={date1}
                      onChange={(e) => setDate1(e.target.value)}
                      type="date"
                      className="border-b-[1px] border-gray rounded-md pl-2 h-[40px] bg-[#F2F2F2] flex items-center justify-center font-semibold w-[75%] outline-none"
                    />
                  </div>
                  <div className="flex items-center w-full px-3 mt-[9px] justify-between">
                    <span className="mr-2 text-[18px] font-bold">Đến</span>
                    <input
                      value={date2}
                      type="date"
                      onChange={(e) => setDate2(e.target.value)}
                      className="border-b-[1px] border-gray rounded-md pl-2 h-[40px] bg-[#F2F2F2] flex items-center justify-center font-semibold w-[75%] outline-none"
                    />
                  </div>
                  <div className="Buttoms flex mx-auto mt-4 md:mt-5 items-center justify-end gap-3 pr-2">
                    <button
                      className="bg-gradient-to-br from-[#ff7d7d]  outline-none to-[#b84949] p-[10px] block rounded-md text-[15px] md:text-[18px]  w-[100px]  font-semibold text-white"
                      onClick={cancelFilter}
                    >
                      Hủy
                    </button>
                    <button
                      className="bg-[#3C8DBC] bg-gradient-to-br outline-none from-cyan-500  p-[10px]  block rounded-lg text-[15px] md:text-[18px] w-[100px] font-semibold text-white"
                      onClick={applyFilter}
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              printerLogs?.map((request, index) => {
                return (
                  <>
                    {request.mssv !== "" ? (
                      <div
                        className="w-[90%] rounded-md bg-[#f1eeee] py-2 border-[1px] border-[#367FA9]"
                        key={index}
                      >
                        <InfoField2
                          fieldName={"Thời gian"}
                          fieldValue={
                            new Date(convertTime(request?.createdAt))
                              .toISOString()
                              .slice(0, 10) +
                            " " +
                            new Date(convertTime(request?.createdAt))
                              .toISOString()
                              .slice(11, 19)
                          }
                        ></InfoField2>
                        <InfoField2
                          fieldName={"ID sinh viên"}
                          fieldValue={request?.mssv}
                        ></InfoField2>
                        <InfoField2
                          fieldName={"Tên sinh viên"}
                          fieldValue={
                            request?.lastName + " " + request?.firstName
                          }
                        ></InfoField2>
                        <InfoField2
                          fieldName={"Tên file in"}
                          fieldValue={request?.document.title}
                        ></InfoField2>
                        <InfoField2
                          fieldName={"Lượng giấy in"}
                          fieldValue={request?.document.pages}
                        ></InfoField2>
                        <InfoField2
                          fieldName={"Số bản in"}
                          fieldValue={request?.numVersion}
                        ></InfoField2>
                        <InfoFieldStatus
                          fieldName={"Trạng thái"}
                          fieldValue={request?.status}
                        ></InfoFieldStatus>
                      </div>
                    ) : (
                      <PrinterhistoryLogsSkeleton></PrinterhistoryLogsSkeleton>
                    )}
                  </>
                );
              })
            )}
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default DetailPrinterLogModal;
