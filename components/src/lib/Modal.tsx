import { ReactNode, MouseEvent, CSSProperties, useEffect } from "react";
import { Modal } from "../lib";
import "./Modal.css";

interface ModalMainProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  type?: "alert" | "confirm" | "prompt" | "";
  size?: "small" | "medium" | "large" | "";
  position?: "center" | "bottom";
  className?: string;
  zIndex?: number;
  customStyle?: CSSProperties;
  children?: string | ReactNode;
  portalRoot?: HTMLElement | null;
}

export function ModalMain({ isOpen, onClose, onConfirm, onCancel, onSubmit, type = "", size = "", position = "center", className = "", zIndex = 999, customStyle = {}, children, portalRoot = document.body }: ModalMainProps) {
  if (!portalRoot) portalRoot = document.body;

  useEffect(() => {
    portalRoot.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen, portalRoot]);

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
        className={`modal-content-container ${position} ${size} ${className}`}
        style={{ zIndex, ...customStyle }}
        onClick={handleModalContainerClick}
      >
        {children}
        <Modal.ButtonContainer
          type={type}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
