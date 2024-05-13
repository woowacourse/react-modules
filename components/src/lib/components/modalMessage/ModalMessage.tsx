import "./ModalMessage.css";
import { ModalMessageProps } from "../../type/modal.type";
import { PropsWithChildren } from "react";

const ModalMessage = ({ children, style = {}, className = "", ...rest }: PropsWithChildren<ModalMessageProps>) => {
  return (
    <div
      className={`modal-message ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalMessage;
