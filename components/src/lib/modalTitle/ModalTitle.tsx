import { ReactNode, CSSProperties } from "react";
import "./ModalTitle.css";

interface ModalTitleProps {
  children?: ReactNode;
  customStyle?: CSSProperties;
  className?: string;
}

const ModalTitle = ({ children, customStyle = {}, className = "" }: ModalTitleProps) => {
  return (
    <div
      className={`modal-title ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default ModalTitle;
