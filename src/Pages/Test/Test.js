import React from "react";
import "./Test.scss";
import PrintingLogInfoModal from "../../Modals/PrintingLogInfoModal";
import ConfirmCancelModal from "../../Modals/ConfirmCancelModal";
import ConfirmPrintingModal from "../../Modals/ConfirmPrintingModal";
import PrinterFilterModal from "../../Modals/PrinterFilterModal";
import PrintingLogFilterModal from "../../Modals/PrintingLogFilterModal";

const TestModalPopover = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-10 w-full flex-wrap">
      <PrintingLogInfoModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Printing Log
        </button>
      </PrintingLogInfoModal>
      <ConfirmPrintingModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Confirm Printing Modal
        </button>
      </ConfirmPrintingModal>
      <ConfirmCancelModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Confirm
        </button>
      </ConfirmCancelModal>
      <PrinterFilterModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4  ">
          Filter Printer
        </button>
      </PrinterFilterModal>
      <PrintingLogFilterModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Filter Printing Log
        </button>
      </PrintingLogFilterModal>
    </div>
  );
};

export default TestModalPopover;
