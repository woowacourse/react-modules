import style from "./ModalButton.module.css";

interface AlertButtonProps {
  buttonText?: string;
  onClick: () => void;
}

export function AlertButton({ buttonText, onClick }: AlertButtonProps) {
  return (
    <div className={style.alertButtonContainer}>
      <button
        className={`${style.button} ${style.primaryButton}`}
        tabIndex={0}
        onClick={onClick}
      >
        {buttonText ?? "확인"}
      </button>
    </div>
  );
}

interface ConfirmButtonProps {
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmButton({
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmButtonProps) {
  return (
    <div className={style.alertButtonContainer}>
      <div className={style.buttonContainer}>
        <button
          className={`${style.button} ${style.secondaryButton}`}
          tabIndex={0}
          onClick={onCancel}
        >
          {cancelText ?? "취소"}
        </button>
        <button
          className={`${style.button} ${style.primaryButton}`}
          tabIndex={0}
          onClick={onConfirm}
        >
          {confirmText ?? "확인"}
        </button>
      </div>
    </div>
  );
}
