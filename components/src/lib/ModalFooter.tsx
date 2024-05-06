import styles from "./ModalFooter.module.css";
import { ConfirmButtonProps } from "./Modal";
import { CancelButtonProps } from "./Modal";

interface ModalFooterProps {
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
}

const ModalFooter = ({ confirmButton, cancelButton }: ModalFooterProps) => {
  return (
    <div className={styles.footerContainer}>
      {confirmButton && (
        <button className={styles.confirmButton} onClick={confirmButton.onConfirm}>
          {confirmButton.content}
        </button>
      )}
      {cancelButton && (
        <button className={styles.cancelButton} onClick={cancelButton.onCancel}>
          {cancelButton.content}
        </button>
      )}
    </div>
  );
};

export default ModalFooter;
