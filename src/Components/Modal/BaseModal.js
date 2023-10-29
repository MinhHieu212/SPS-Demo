import React from "react";
import ReactDom from "react-dom";
import { CloseModalIcon } from "../../Assets/Icons/Icons";

const BaseModal = ({ open = false, handleClose = () => {}, children }) => {
  if (document.querySelector("body") === "undefined") {
    handleClose();
    return <div className="ModalHidden"></div>;
  }

  return ReactDom.createPortal(
    <div
      className={`${
        open ? "" : "opacity-0 invisible"
      } Modal fixed inset-0 z-50 flex items-center justify-center p-2 transition-all`}
    >
      <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="content relative w-[auto] h-[auto] bg-white z-10 rounded-lg">
        <span
          className="absolute right-2 top-2 p-2 flex items-center justify-center rounded-full z-10"
          onClick={handleClose}
        >
          <CloseModalIcon></CloseModalIcon>
        </span>
        {children}
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default BaseModal;
