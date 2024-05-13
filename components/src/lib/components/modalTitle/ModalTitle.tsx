import "./ModalTitle.css";
import { ModalTitleProps } from "../../type/modal.type";
import { PropsWithChildren } from "react";

const ModalTitle = ({ children, style = {}, className = "", ...rest }: PropsWithChildren<ModalTitleProps>) => {
  return (
    <div
      className={`modal-title ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalTitle;
