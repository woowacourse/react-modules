import styles from "./Modal.module.css";
import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

type positionProps = "center" | "bottom";

export interface TitleProps {
  position: "left" | "center";
  content: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface ConfirmButtonProps {
  content: string;
  onConfirm: () => void;
}

export interface CancelButtonProps {
  content: string;
  onCancel: () => void;
}

interface ModalProps {
  position: positionProps;
  title?: TitleProps;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: CloseButtonProps;
  confirmButton?: ConfirmButtonProps;
  cancelButton?: CancelButtonProps;
}

const Modal = ({
  position,
  title,
  children,
  isOpen,
  onClose,
  closeButton,
  confirmButton,
  cancelButton,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.container} ${styles[position]}`}>
          <div className={styles.backDrop} onClick={onClose}></div>
          <div className={styles.modalSection}>
            <ModalHeader title={title} closeButton={closeButton} />
            <ModalContent children={children} />
            <ModalFooter confirmButton={confirmButton} cancelButton={cancelButton} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
