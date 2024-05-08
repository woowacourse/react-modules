import { ReactNode, CSSProperties } from "react";
import "./ModalButton.css";

interface ModalButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
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
