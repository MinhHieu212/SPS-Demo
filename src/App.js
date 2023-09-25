import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Printing from "./Page/Printing";
import Support from "./Page/Support";
import { useEffect, useState } from "react";
import Navigator from "./Components/Navigator";
import Header from "./Components/Header";
import { useRef } from "react";

function App() {
  const [showNav, setshowNav] = useState(false);
  const [shadow1, setShadow1] = useState(true);
  const [shadow2, setShadow2] = useState(false);
  const [shadow3, setShadow3] = useState(false);

  const handleOnClick1 = (e) => {
    setShadow1(true);
    setShadow2(false);
    setShadow3(false);
  };
  const handleOnClick2 = (e) => {
    setShadow1(false);
    setShadow2(true);
    setShadow3(false);
  };
  const handleOnClick3 = (e) => {
    setShadow1(false);
    setShadow2(false);
    setShadow3(true);
  };

  // const [shadows, setShadows] = useState({ shadow1: true, shadow2: false, shadow3: false });

  // const handleOnClick = (selectedShadow) => {
  //       setShadows({ shadow1: false, shadow2: false, shadow3: false, [selectedShadow]: true });
  // };

  const elementRef = useRef();

  const handleOnClickOut = (e) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(e.target) &&
      !e.target.matches("#Header_MenuIcon") &&
      !e.target.matches("svg") &&
      !e.target.matches("path") &&
      window.innerWidth <= 849
    ) {
      setshowNav(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 849) {
      setshowNav(true);
    } else {
      setshowNav(false);
    }
    document.addEventListener("click", handleOnClickOut);
    return () => {
      document.removeEventListener("click", handleOnClickOut);
    };
  }, []);

  const [pl, setPl] = useState("ml-[66px]");

  useEffect(() => {
    setPl("ml-[66px]");
    if (window.innerWidth >= 849 && showNav) {
      setPl("ml-[250px]");
    }
  }, [showNav]);

  return (
    <div>
      <Header
        showNav={showNav}
        setShowNav={setshowNav}
        handleOnClick1={handleOnClick1}
      ></Header>
      <div className="w-full flex mt-[66px]">
        <Navigator
          showNav={showNav}
          shadow1={shadow1}
          shadow2={shadow2}
          shadow3={shadow3}
          handleOnClick1={handleOnClick1}
          handleOnClick2={handleOnClick2}
          handleOnClick3={handleOnClick3}
          elementRef={elementRef}
        ></Navigator>
        <div className={`Main_Container ${pl} w-full`}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/SPS-SYSTEM-FE" element={<Home></Home>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Printing" element={<Printing></Printing>}></Route>
            <Route path="/Support" element={<Support></Support>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
