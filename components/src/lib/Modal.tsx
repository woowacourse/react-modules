import styles from "./Modal.module.css";
import closeIcon from "../asset/close.png";
import { useEffect } from "react";
interface ModalProps {
  position: "bottom" | "center";
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ position, title, children, isOpen, onClose }: ModalProps) {
  const containerClassName = `${styles.modalContents} ${styles[position]}`;
  useEffect(() => {
    if (!isOpen) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer}>
          <div
            className={styles.modalBackground}
            onClick={() => {
              onClose();
            }}
          />
          <div
            className={`${containerClassName}`}
            onClick={(e) => e.stopPropagation()}
          >
            <header className={styles.modalHeader}>
              <p className={styles.title}>{title}</p>
              <img
                className={styles.closeButton}
                src={closeIcon}
                alt="닫기버튼"
                onClick={onClose}
              />
            </header>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
