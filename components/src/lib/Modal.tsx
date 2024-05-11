import React, { ReactNode, MouseEvent, CSSProperties, useEffect } from "react";
import { Modal } from "../lib";
import "./Modal.css";

interface ModalMainProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  type?: "alert" | "confirm" | "prompt" | "default";
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  className?: string;
  zIndex?: number;
  customStyle?: CSSProperties;
  children?: ReactNode;
  portalRoot?: HTMLElement | null;
}

export const ModalMain = ({ isOpen, onClose, onConfirm, onCancel, onSubmit, type = "default", size = "medium", position = "center", className = "", zIndex = 999, customStyle = {}, children, portalRoot = document.body }: ModalMainProps) => {
  useEffect(() => {
    if (portalRoot) {
      portalRoot.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, portalRoot]);

  const handleModalContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

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
          onClose={onClose}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
