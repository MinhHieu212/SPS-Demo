import React from "react";
import "./Test.scss";
import ModifyPrinterInfo from "../../Modals/ModifyPrinterInfo";

const TestModalPopover = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-10 w-full flex-wrap">
      <ModifyPrinterInfo>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Printing Infomation - Modify
        </button>
      </ModifyPrinterInfo>
    </div>
  );
};

export default TestModalPopover;
