import styles from "./Modal.module.css";

interface ModalPropsType {
  title: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  title,
  isModalOpen,
  setIsModalOpen,
}: ModalPropsType) => {
  return (
    <>
      <div
        className={`${styles["modal-background"]} ${
          isModalOpen && styles.active
        }`}
      >
        <div className={styles.modal}>
          <h4>{title}</h4>
          <button onClick={() => setIsModalOpen(false)}>X</button>
        </div>
      </div>
    </>
  );
};
