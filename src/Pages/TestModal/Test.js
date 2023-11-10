import React from "react";
import "./Test.scss";
import PrintingRequestModal from "../../Modals/PrintingRequestModal";
import ModifyPrinterInfoModal from "../../Modals/ModifyPrinterInfoModal";
import PrintingLogModal from "../../Modals/PrintingLogModal";

const TestModalPopover = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-10 w-full flex-wrap">
      <ModifyPrinterInfoModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Printing Infomation - Modify
        </button>
      </ModifyPrinterInfoModal>
      <PrintingRequestModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Request Printing
        </button>
      </PrintingRequestModal>
      <PrintingLogModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Printing Log
        </button>
      </PrintingLogModal>
    </div>
  );
};

export default TestModalPopover;
