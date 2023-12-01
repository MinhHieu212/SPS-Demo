import React, { useState } from "react";
import "./Manage.scss";

import { PrinterInfoAndConfigModal, PrinterQueueModal } from "../../Modals";
import StaffPrinterLogModal from "../../Modals/StaffPrinterLogModal/StaffPrinterLogModal";

import { getPtrLog, getPtrQueue } from "../../APIs/StaffAPI/StaffAPI";
function ManageItem(props) {
  const [data, setData] = useState([]);
  const [log, setLog] = useState([]);
  const [queueData, setQueueData] = useState([]);
  const [queue, setQueue] = useState([]);
  const handleGetLogs = async (id) => {
    const response = await getPtrLog(id);
    setData(response?.data?.data);
    setLog(response?.data?.data?.printingLog);
  };
  const handleSubmit = () => {
    handleGetLogs({ printerId: props.id });
  };
  const handleGetQueue = async (id) => {
    const response = await getPtrQueue(id);
    setQueueData(response?.data?.data);
    setQueue([
      ...response?.data?.data?.printingJob,
      ...response?.data?.data?.printingQueue,
    ]);
  };
  const handleSubmitQueue = () => {
    handleGetQueue({ printerId: props.id });
  };
  return (
    <div className="ManageItem flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-[12px] px-4 mt-2 rounded-sm border-b-2 border-black min-w-[800px] md:w-full max-h-[60px]">
      <div className="min-w-[10%] text-center">{props.id}</div>
      <div className="min-w-[30%] flex flex-row   items-center justify-center gap-4   px-5">
        <p>{props.queue}</p>
        <PrinterQueueModal queue={queue}>
          <button
            onClick={handleSubmitQueue}
            className="rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans   font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Chi tiết
          </button>
        </PrinterQueueModal>
      </div>
      <div className="min-w-[20%] flex justify-center items-center">
        <StaffPrinterLogModal log={log}>
          <button
            onClick={handleSubmit}
            className="rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Lịch sử
          </button>
        </StaffPrinterLogModal>
      </div>
      <div className="w-[20%] flex flex-row justify-center px-0 md:px-2 items-center">
        <p
          className={`overflow-hidden ${
            props.status == "Hoạt động" ? "text-[blue]" : "text-[red]"
          }`}
        >
          {props.status}
        </p>
      </div>
      <div className="overflow-hidden px-1 flex items-center justify-center w-[20%]">
        <PrinterInfoAndConfigModal
          id={props.id}
          status={props.status}
          description={props.description}
          brand={props.brand}
          model={props.model}
          fileType={props.fileType}
          setRenderList={() => props.setRenderList()}
        >
          <button className="rounded-md bg-[#3C8DBC] text-[14px] lg:text-[16px] py-1 px-3 font-sans font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Cấu hình
          </button>
        </PrinterInfoAndConfigModal>
      </div>
    </div>
  );
}

export default ManageItem;