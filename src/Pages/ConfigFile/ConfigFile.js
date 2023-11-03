import React from "react";
import { useParams } from "react-router-dom";

const ConfigFile = () => {
  const { PrinterID } = useParams();

  return (
    <div className="w-full h-[500px] flex items-center justify-center font-bold text-3xl">
      Configuration file <span className="text-[red] pl-2"> {PrinterID} </span>
    </div>
  );
};

export default ConfigFile;
