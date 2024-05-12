import { ReactNode } from "react";
import styles from "./Modal.module.css";
import { CloseButtonImage } from "./CloseButtonImage";
import { CancelButtonProps, ConfirmButtonProps } from "./interfaces";
import CancelButton from "./CancelButton";
import TitleField from "./TitleField";
import ConfirmButton from "./ConfirmButton";

interface ModalProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
  modalPosition: "center" | "bottom";
  preventCloseOnOutsideClick?: boolean;
  children: ReactNode;
}

const Modal = ({
  title,
  subtitle,
  onClose,
  confirmButton,
  cancelButton,
  modalPosition,
  preventCloseOnOutsideClick,
  children,
}: ModalProps) => {
  return (
    <>
      <div
        onClick={preventCloseOnOutsideClick ? () => {} : onClose}
        className={styles["backdrop"]}
      />
      <div className={styles[`container-${modalPosition}`]}>
        <div className={styles["header"]}>
          <span className={styles["button-close"]} onClick={onClose}>
            <CloseButtonImage />
          </span>
          {title && <TitleField title={title} subtitle={subtitle} />}
        </div>
        {children}
        <div className={styles["button-container"]}>
          <CancelButton cancelButton={cancelButton} />
          <ConfirmButton confirmButton={confirmButton} />
        </div>
      </div>
    </>
  );
};

export default Modal;
