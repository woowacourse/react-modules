import { ReactNode, CSSProperties } from "react";
import "./ModalMessage.css";

interface ModalMessageProps {
  children?: ReactNode;
  customStyle?: CSSProperties;
  className?: string;
}

const ModalMessage = ({ children, customStyle = {}, className = "" }: ModalMessageProps) => {
  return (
    <div
      className={`modal-message ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default ModalMessage;
