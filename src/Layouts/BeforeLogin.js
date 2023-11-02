import HeaderBeforeLogin from "../Components/Header/HeaderBeforeLogin";

import React from "react";

const BeforeLogin = ({ children }) => {
  return (
    <div>
      <HeaderBeforeLogin></HeaderBeforeLogin>
      <div className="w-full flex">
        <div className={`Main_Container w-full mt-[66px]`}>{children}</div>
      </div>
    </div>
  );
};

export default BeforeLogin;
