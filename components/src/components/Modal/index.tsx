import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";
import CloseIcon from "@assets/close.svg";

export type ModalPositionType = "center" | "bottom";
interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  position?: ModalPositionType;
}

function Modal({
  isOpen,
  title,
  onClose,
  children,
  position = "bottom",
}: PropsWithChildren<ModalProps>) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div className={`${styles.container} ${styles[position]}`}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
          >
            <img src={CloseIcon} alt="닫기 버튼" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
