import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ModalContext";
import Background from "./Background";
import Container from "./Container";
import Header from "./Header";
import Content from "./Content";
import { AlertDialog, ConfirmDialog, PromptDialog } from "./DialogPresets";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: "bottom" | "center";
  dialogType: "default" | "alert" | "confirm" | "prompt";
  children: React.ReactNode;
}

function Modal({
  isOpen,
  onClose,
  position = "center",
  dialogType = "default",
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose, position, dialogType }}>
      {children}
    </ModalContext.Provider>,
    document.body
  );
}

Modal.Background = Background;
Modal.Container = Container;
Modal.Header = Header;
Modal.Content = Content;
Modal.Alert = AlertDialog;
Modal.Confirm = ConfirmDialog;
Modal.Prompt = PromptDialog;

export default Modal;
