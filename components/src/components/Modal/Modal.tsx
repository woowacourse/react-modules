import styles from "./Modal.module.css";

interface ModalPropsType {
  title: string;
  isModalOpen: boolean;
}

export const Modal = ({ title, isModalOpen }: ModalPropsType) => {
  return (
    <>
      <div
        className={`${styles["modal-background"]} ${
          isModalOpen && styles.active
        }`}
      >
        <div className={styles.modal}>
          <h4>{title}</h4>
          <button>X</button>
        </div>
      </div>
    </>
  );
};
