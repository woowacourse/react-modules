import React from "react";
import closeIcon from "./assets/close.svg";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = ({ closeButton = false, children }: { closeButton: boolean; children: React.ReactNode }) => {
  return (
    <div>
      <span>{children}</span>
      {closeButton && <img src={closeIcon} alt="X" />}
    </div>
  );
};

Modal.Body = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Footer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Title = ({ children }: { children: React.ReactNode }) => {
  return <span>{children}</span>;
};

export default Modal;
