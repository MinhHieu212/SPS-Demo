import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const useRole = () => {
  return useContext(RoleContext);
};

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("");

  const updateRole = (newRole) => {
    setRole(newRole);
  };

  const value = { role, updateRole };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};
