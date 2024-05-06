import { ReactNode, CSSProperties } from "react";
import "./ModalButton.css";

interface ModalButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  children?: ReactNode;
  customStyle?: CSSProperties;
}

function ModalButton({ onClick, variant = "primary", children, customStyle = {} }: ModalButtonProps) {
  return (
    <button
      className={`modal-btn ${variant}`}
      onClick={onClick}
      style={customStyle}
    >
      {children}
    </button>
  );
}

export default ModalButton;
