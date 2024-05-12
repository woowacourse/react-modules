import { MouseEvent, PropsWithChildren, useEffect } from "react";
import { Modal } from "../lib";
import "./Modal.css";
import { ModalMainProps } from "./type/modal.type";

export const ModalMain = ({ isOpen, onClose, onConfirm, onCancel, onSubmit, type = "default", size = "medium", position = "center", className = "", zIndex = 999, children, portalRoot = document.body, ...rest }: PropsWithChildren<ModalMainProps>) => {
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
    <div
      className="modal-container"
      {...rest}
    >
      <div
        className="back-drop"
        onClick={onClose}
      ></div>
      <div
        className={`modal-content-container ${position} ${size} ${className}`}
        style={{ zIndex }}
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
