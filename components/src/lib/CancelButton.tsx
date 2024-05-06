import styles from "./Modal.module.css";
import { CancelButtonProps } from "./interfaces";

export default function CancelButton({
  cancelButton,
}: {
  cancelButton?: CancelButtonProps;
}) {
  if (cancelButton)
    return (
      <button
        className={styles["button-cancel"]}
        onClick={cancelButton.onCancel}
      >
        {cancelButton.content}
      </button>
    );
}
