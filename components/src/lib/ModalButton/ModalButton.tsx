import style from "./ModalButton.module.css";

interface AlertButtonProps {
  buttonText?: string;
}

export function AlertButton({ buttonText }: AlertButtonProps) {
  return (
    <div className={style.alertButtonContainer}>
      <button className={style.alertButton}>{buttonText ?? "확인"}</button>
    </div>
  );
}
