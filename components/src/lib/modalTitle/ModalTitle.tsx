import "./ModalTitle.css";
import { ModalTitleProps } from "../type/modal.type";
import { PropsWithChildren } from "react";

const ModalTitle = ({ children, style = {}, className = "" }: PropsWithChildren<ModalTitleProps>) => {
  return (
    <div
      className={`modal-title ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ModalTitle;
