import React from "react";
import "./Test.scss";
import { ActivitiesFilterModal } from "../../Modals";

const TestModalPopover = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-10 bg-slate-500 max-w-[170px] ml-auto mr-10 flex-wrap">
      <ActivitiesFilterModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Ticket 30
        </button>
      </ActivitiesFilterModal>
    </div>
  );
};

export default TestModalPopover;
