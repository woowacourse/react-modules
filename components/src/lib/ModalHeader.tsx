import { CloseButtonProps, TitleProps } from "./Modal";
import styles from "./ModalHeader.module.css";
import closeButtonImage from "./assets/closeButton.svg";

interface ModalHeaderProps {
  title?: TitleProps;
  closeButton?: CloseButtonProps;
}

const ModalHeader = ({ title, closeButton }: ModalHeaderProps) => {
  return (
    <div className={styles.titleContainer}>
      {title && <h2 className={`${styles.title} ${styles[title.position]}`}>{title.content}</h2>}
      {closeButton && (
        <button className={styles.closeButton} onClick={closeButton.onClose}>
          <img src={closeButtonImage} />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
