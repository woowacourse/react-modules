import { ReactNode, CSSProperties } from "react";
import "./ModalMessage.css";

interface ModalMessageProps {
  children?: ReactNode;
  customStyle?: CSSProperties;
}

const ModalMessage = ({ children, customStyle = {} }: ModalMessageProps) => {
  return (
    <div
      className="modal-message"
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default ModalMessage;
