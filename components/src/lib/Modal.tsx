import styles from "./Modal.module.css";
import closeIcon from "../asset/close.png";
interface ModalProps {
  position: "bottom" | "center";
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ position, title, children, isOpen, onClose }: ModalProps) {
  const containerClassName = `${styles.modalContainer} ${styles[position]}`;

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={`${containerClassName}`}>
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
