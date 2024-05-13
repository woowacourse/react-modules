import { PropsWithChildren } from "react";
import { ModalButtonProps } from "../../type/modal.type";
import "./ModalButton.css";

const ModalButton = ({ variant = "primary", size = "large", children, ...rest }: PropsWithChildren<ModalButtonProps>) => {
  return (
    <button
      className={`modal-btn ${variant} ${size}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ModalButton;
