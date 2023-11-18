import React, { useState } from "react";
import "./Test.scss";
import { ActivitiesFilterModal, FilterPrinterModal } from "../../Modals";
import AddPrinterModal from "../../Modals/AddPrinterModal/AddPrinterModal";

const TestModalPopover = () => {
  const handle = (e) => {
    console.log(e.target.files);
  };

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
  console.log(files);
  const removeFile = (fileName) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.file.name !== fileName)
    );
  };

  return (
    <div
      className="flex flex-col gap-4 items-center justify-center mt-10 max-w-[170px] mx-auto
      flex-wrap"
    >
      <AddPrinterModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Click Me
        </button>
      </AddPrinterModal>
    </div>
  );
};

export default TestModalPopover;
