import { ReactNode, CSSProperties } from "react";
import "./ModalTitle.css";

interface ModalTitleProps {
  children?: ReactNode;
  customStyle?: CSSProperties;
}

const ModalTitle = ({ children, customStyle = {} }: ModalTitleProps) => {
  return (
    <div
      className="modal-title"
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default ModalTitle;
