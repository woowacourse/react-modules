import styles from "./Modal.module.css";

interface ModalProps {
  position: "bottom" | "center";
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
}

function Modal({ position, title, children, isOpen }: ModalProps) {
  const containerClassName = `${styles.modalContainer} ${styles[position]}`;
  return (
    <>
      {isOpen && (
        <div className={containerClassName}>
          <div className={`${styles.position}${styles.modalContainer}`}>
            <p>{title}</p>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
