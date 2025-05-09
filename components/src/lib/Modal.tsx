import { createPortal } from "react-dom";
import closeIcon from "../asset/close.png";
import { useKeyPress } from "../hooks/useKeyPress";
import styles from "./Modal.module.css";
import { ModalContext, useModal } from "./ModalContext";

export interface ModalProps {
  position: "bottom" | "center";
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ position, isOpen, onClose, children }: ModalProps) {
  const backgroundClassName = `${styles[position]} ${styles.modalBackground}`;
  const containerClassName = `${styles.modalContents} ${
    styles[`${position}Width`]
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
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
}

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <div>{children}</div>;
}

interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  const { onClose } = useModal();

  return (
    <header className={styles.modalHeader}>
      <p className={styles.title}>{children}</p>
      <img
        className={styles.closeButton}
        src={closeIcon}
        alt="닫기버튼"
        onClick={onClose}
        id="modal-close-button"
      />
    </header>
  );
}

Modal.Content = Content;
Modal.Header = Header;

export default Modal;
