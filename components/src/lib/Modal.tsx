import { ReactNode, MouseEvent, CSSProperties } from "react";
import "./Modal.css";

interface ModalMainProps {
  onClose: () => void;
  isOpen: boolean;
  position?: "center" | "bottom";
  className?: string;
  zIndex?: number;
  customStyle?: CSSProperties;
  children?: string | ReactNode;
}

export function ModalMain({ onClose, isOpen, position = "center", className = "", zIndex = 999, customStyle = {}, children }: ModalMainProps) {
  if (!isOpen) return null;

  const handleModalContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-container">
      <div
        className="back-drop"
        onClick={onClose}
      ></div>
      <div
        className={`modal-content-container ${position} ${className}`}
        style={{ zIndex, ...customStyle }}
        onClick={handleModalContainerClick}
      >
        {children}
      </div>
    </div>
  );
}
