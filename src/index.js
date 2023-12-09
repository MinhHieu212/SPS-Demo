import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { RoleProvider } from "./Contexts/RoleContext";
import { UserInfoProvider } from "./Contexts/UserInfoContext";
import { SocketProvider } from "./Contexts/SocketIOContenxt";
import { NewNoticeProvider } from "./Contexts/NoticeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode off>
  <SocketProvider>
    <RoleProvider>
      <UserInfoProvider>
        <NewNoticeProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </NewNoticeProvider>
      </UserInfoProvider>
    </RoleProvider>
  </SocketProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
