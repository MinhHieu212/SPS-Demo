import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";

const ModalBase = ({
  coords,
  visible,
  onClose,
  children,
  bodyClassName = "",
}) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} classNames="zoom" unmountOnExit>
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
            bodyStyle={{
              transition: "all 250ms",
              top: coords.bottom + 25,
              left: coords.left - coords.width - 45,
              // right: coords.,
              position: "absolute",
            }}
            bodyClassName={`relative z-10 content shadow-lg ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
