import styles from "./Modal.module.css";
import { ConfirmButtonProps } from "./interfaces";

export default function ConfirmButton({
  confirmButton,
}: {
  confirmButton?: ConfirmButtonProps;
}) {
  if (!confirmButton) return null;

  return (
    <button
      className={styles["button-confirm"]}
      onClick={confirmButton.onConfirm}
    >
      {confirmButton.content}
    </button>
  );
}
