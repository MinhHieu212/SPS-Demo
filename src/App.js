import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Printing from "./Page/Printing";
import Support from "./Page/Support";
import { useEffect, useState } from "react";
import Navigator from "./Components/Navigator";
import Header from "./Components/Header";

function App() {
  const [hideNav, setHideNav] = useState(false);

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
  //          setShadows({ shadow1: false, shadow2: false, shadow3: false, [selectedShadow]: true });
  // };

  useEffect(() => {
    if (window.innerWidth >= 849) {
      setHideNav(true);
      // layout
    } else {
      setHideNav(false);
    }
  }, []);

  const [pl, setPl] = useState("ml-[66px]");

  useEffect(() => {
    setPl("ml-[66px]");
    if (window.innerWidth >= 849 && hideNav) {
      setPl("ml-[250px]");
    }
  }, [hideNav]);

  return (
    <div>
      <Header
        hideNav={hideNav}
        setShowNav={setHideNav}
        handleOnClick1={handleOnClick1}
      ></Header>
      <div className="w-full flex mt-[66px]">
        <Navigator
          hideNav={hideNav}
          shadow1={shadow1}
          shadow2={shadow2}
          shadow3={shadow3}
          handleOnClick1={handleOnClick1}
          handleOnClick2={handleOnClick2}
          handleOnClick3={handleOnClick3}
        ></Navigator>
        <div className={`Main_Container ${pl} w-full`}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/SPS-Demo" element={<Home></Home>}></Route>
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
