import React, { useState } from "react";
import "./Test.scss";
import { ActivitiesFilterModal, FilterPrinterModal } from "../../Modals";

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
      <div class="border border-dashed border-gray-500 w-[500px] relative">
        <input
          type="file"
          multiple
          class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
          onChange={handleFileChange}
        />
        <div class="text-center p-10 w-[400px] absolute top-0 right-0 left-0 m-auto">
          <h4>
            Drop files anywhere to upload
            <br />
            or
          </h4>
          <p class="">Select Files</p>
        </div>
      </div>
      {/* <FilterPrinterModal>
        <button className="bg-blue-400 rounded-lg text-white uppercase font-semibold p-4">
          Modal Click Me
        </button>
      </FilterPrinterModal> */}
    </div>
  );
};

export default TestModalPopover;
