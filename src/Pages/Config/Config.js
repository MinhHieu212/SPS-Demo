import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Config = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("Role") !== "SPSO") {
  //     navigate("/Error");
  //   }
  // }, []);
  return (
    <div className="w-full h-[500px] flex items-center justify-center font-bold text-3xl">
      Hello from Config page
    </div>
  );
};

export default Config;
