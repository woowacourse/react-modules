import { ReactNode, CSSProperties } from "react";
import "./ModalButton.css";
import { ButtonSize, ButtonVariant } from "../type/modalType";

interface ModalButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  className?: string;
  customStyle?: CSSProperties;
}

const ModalButton = ({ onClick, variant = "primary", size = "large", className = "", customStyle = {}, children }: ModalButtonProps) => {
  return (
    <button
      className={`modal-btn ${variant} ${size} ${className}`}
      onClick={onClick}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default ModalButton;
