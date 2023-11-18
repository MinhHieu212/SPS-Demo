import React, { createContext, useContext, useState } from "react";

const UserInfoContext = createContext();

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

export const UserInfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    mssv: "...",
    firstName: "",
    lastName: "...",
    balance: 0,
    major: "...",
    classes: "...",
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
