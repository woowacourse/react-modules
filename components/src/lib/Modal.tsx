import styles from "./Modal.module.css";

interface ModalPropsType {
  isModalOpen: boolean;
  position: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({
  isModalOpen,
  position,
  title,
  children,
  onClose,
}: ModalPropsType) => {
  return (
    <>
      <div
        className={`${styles["modal-background"]} ${
          styles[`background${position}`]
        } ${isModalOpen ? styles.active : ""}`}
      >
        <div className={`${styles.modal} ${styles[`modal${position}`]}`}>
          <div className={styles.modalHeader}>
            <h4>{title}</h4>
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
