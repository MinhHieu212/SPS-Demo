import React, { createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketIOContenxt = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io("https://ssps-7wxl.onrender.com");

  socket.on("connect", () => {
    console.log("Connecttion signal");
  });

  return (
    <SocketIOContenxt.Provider value={socket}>
      {children}
    </SocketIOContenxt.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketIOContenxt);
};
