import Header from "../Components/Header/Header";
import SideBar from "../Components/Sidebar/SideBar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import React from "react";
import { useNavigate } from "react-router";

const DefaultLayout = ({ children, role }) => {
  const elementRef = useRef();
  const navigate = useNavigate();
  const [showSideBar, setshowSideBar] = useState(false);
  const [marginLeft, setMarginLeft] = useState("ml-[66px]");

  const handleOnClickOut = (e) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(e.target) &&
      !e.target.matches("#Header_MenuIcon") &&
      !e.target.matches("svg") &&
      !e.target.matches("path") &&
      window.innerWidth <= 1280
    ) {
      setshowSideBar(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setshowSideBar(true);
    } else {
      setshowSideBar(false);
    }

    document.addEventListener("click", handleOnClickOut);
    return () => {
      document.removeEventListener("click", handleOnClickOut);
    };
  }, []);

  useEffect(() => {
    setMarginLeft("ml-[66px]");
    if (window.innerWidth > 1280 && showSideBar) {
      setMarginLeft("ml-[250px]");
    }
  }, [showSideBar]);

  return (
    <div>
      <Header
        showSideBar={showSideBar}
        setShowSideBar={setshowSideBar}
      ></Header>
      <div className="w-full flex mt-[66px] md:mt-[55px] relative">
        <SideBar showSideBar={showSideBar} elementRef={elementRef}></SideBar>
        <div className={`Main_Container ${marginLeft} w-full bg-[#f8f9fa]`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
