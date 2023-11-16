import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

export const UserInfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    mssv: "none",
    firstName: "",
    lastName: "none",
    balance: 0,
    major: "none",
    classes: "none",
  });

  const updateUserInfo = (newInfo) => {
    setInfo(newInfo);
  };

  const value = { info, updateUserInfo };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
