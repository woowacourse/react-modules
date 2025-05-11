import { createPortal } from "react-dom";
import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./Modal.module.css";
import { ModalContext } from "../ModalContext";
import { useRef } from "react";
import useFocusTrap from "../../hooks/useFocusTrap";

export interface ModalComponentProps {
  position: "bottom" | "center";
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function ModalComponent({
  position,
  isOpen,
  onClose,
  children,
  size = "md",
}: ModalComponentProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap({ modalRef, isOpen });

  const backgroundClassName = `${styles[position]} ${styles.modalBackground}`;
  const containerClassName = `${styles.modalContents} ${
    styles[`${size}Modal`]
  }`;

  useKeyPress({ targetKey: "Escape", isOpen, onClose });
  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ isOpen, onClose, position }}>
      <div
        id="modal-background"
        className={backgroundClassName}
        onClick={() => {
          onClose();
        }}
      >
        <div
          id="modal-container"
          className={`${containerClassName}`}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
}
