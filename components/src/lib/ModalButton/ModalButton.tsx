import style from "./ModalButton.module.css";

interface AlertButtonProps {
  buttonText?: string;
}

export function AlertButton({ buttonText }: AlertButtonProps) {
  return (
    <div className={style.alertButtonContainer}>
      <button className={`${style.button} ${style.primaryButton}`}>
        {buttonText ?? "확인"}
      </button>
    </div>
  );
}

interface ConfirmButtonProps {
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmButton({ confirmText, cancelText }: ConfirmButtonProps) {
  return (
    <div className={style.alertButtonContainer}>
      <div className={style.buttonContainer}>
        <button className={`${style.button} ${style.secondaryButton}`}>
          {cancelText ?? "취소"}
        </button>
        <button className={`${style.button} ${style.primaryButton}`}>
          {confirmText ?? "확인"}
        </button>
      </div>
    </div>
  );
}
