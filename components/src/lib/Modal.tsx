import styles from "./Modal.module.css";
import closeIcon from "../asset/close.png";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useKeyPress } from "../hooks/useKeyPress";

export interface ModalProps {
  id: string;
  position: "bottom" | "center";
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  renderHeader?: () => React.ReactNode;
}

function Modal({
  id,
  position,
  title,
  children,
  isOpen,
  onClose,
  renderHeader,
}: ModalProps) {
  const containerClassName = `${styles.modalContents} ${
    styles[`${position}Width`]
  }`;
  const backgroundClassName = `${styles[position]} ${styles.modalBackground}`;

  useKeyPress({ targetKey: "Escape", isOpen, onClose });

  if (!isOpen) return null;

  return createPortal(
    <div
      id={`${id}-background`}
      className={backgroundClassName}
      onClick={() => {
        onClose();
      }}
    >
      <div
        id={id}
        className={`${containerClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {renderHeader?.() ?? (
          <header className={styles.modalHeader}>
            <p className={styles.title}>{title}</p>
            <img
              className={styles.closeButton}
              src={closeIcon}
              alt="닫기버튼"
              onClick={onClose}
              id="modal-close-button"
            />
          </header>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
