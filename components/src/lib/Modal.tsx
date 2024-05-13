import { MouseEvent, PropsWithChildren, useEffect } from "react";
import "./Modal.css";
import { ModalContentProps, ModalFooterProps, ModalHeaderProps, ModalMainProps } from "./type/modal.type";

export const ModalHeader = ({ children, ...rest }: PropsWithChildren<ModalHeaderProps>) => {
  return (
    <header
      {...rest}
      className="modal-header"
    >
      {children}
    </header>
  );
};

export const ModalContent = ({ children, ...rest }: PropsWithChildren<ModalContentProps>) => {
  return (
    <section
      {...rest}
      className="modal-content"
    >
      {children}
    </section>
  );
};

export const ModalFooter = ({ children, ...rest }: PropsWithChildren<ModalFooterProps>) => {
  return (
    <section
      {...rest}
      className="modal-footer"
    >
      {children}
    </section>
  );
};

export const ModalMain = ({ isOpen, onClose, size = "medium", position = "center", className = "", zIndex = 999, children, portalRoot = document.body, ...rest }: PropsWithChildren<ModalMainProps>) => {
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
      </div>
    </div>
  );
};
