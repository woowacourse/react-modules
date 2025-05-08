import { useRef } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ModalContext";
import Background from "./parts/Background";
import Container from "./parts/Container";
import Header from "./parts/Header";
import Content from "./parts/Content";
import {
  AlertDialog,
  ConfirmDialog,
  PromptDialog,
} from "./parts/DialogPresets";
import { useFocusTrap } from "./hooks/useFocusTrap";
import { useEscapeClose } from "./hooks/useEscapeClose";

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
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef);
  useEscapeClose(isOpen, onClose);
  if (!isOpen) return null;

  return createPortal(
    <div ref={modalRef}>
      <ModalContext.Provider value={{ onClose, position, dialogType }}>
        {children}
      </ModalContext.Provider>
    </div>,
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
