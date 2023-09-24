import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Printing from "./Page/Printing";
import Support from "./Page/Support";
import { useState } from "react";
import Navigator from "./Components/Navigator";
import Header from "./Components/Header";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      {/* Header */}
      <Header showNav={showNav} setShowNav={setShowNav}></Header>
      <div className="Body w-full flex mt-[66px]">
        {/* Navigator */}
        <Navigator showNav={showNav}></Navigator>
        {/* Content */}
        <div className="Main ml-[66px] w-full">
          <Routes>
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
