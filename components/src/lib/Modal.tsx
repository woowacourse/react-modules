import { ReactNode, MouseEvent, CSSProperties, useEffect } from "react";
import "./Modal.css";

interface ModalMainProps {
  onClose: () => void;
  isOpen: boolean;
  position?: "center" | "bottom";
  className?: string;
  zIndex?: number;
  customStyle?: CSSProperties;
  children?: string | ReactNode;
  portalRoot?: HTMLElement | null;
}

export function ModalMain({ onClose, isOpen, position = "center", className = "", zIndex = 999, customStyle = {}, children, portalRoot = document.body }: ModalMainProps) {
  if (!portalRoot) portalRoot = document.body;

  useEffect(() => {
    portalRoot.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen, portalRoot]);

  if (!isOpen) return null;

  portalRoot.style.overflow = isOpen ? "hidden" : "auto";

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
