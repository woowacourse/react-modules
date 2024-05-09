import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { PositionProps, SizeProps, TitleProps } from "./Modal";
import styles from "./Modal.module.css";

interface ConfirmModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  onConfirm,
  onCancel,
}: PropsWithChildren<ConfirmModalProps>) => {
  const confirmModalButton = [
    {
      content: "취소",
      onClick: onCancel,
      className: "cancelButton",
      style: {
        background: "transparent",
        color: "rgba(139, 149, 161, 1)",
        border: "1px solid rgba(51, 51, 51, 0.25)",
      },
    },
    {
      content: "확인",
      onClick: onConfirm,
      className: "confirmButton",
      style: {
        background: "rgba(51, 51, 51, 1)",
        color: "white",
      },
    },
  ];

  return (
    <>
      {isOpen && (
        <div className={`${styles.alertModal} ${styles.container} ${styles[position]}`}>
          <div className={styles.backDrop}></div>
          <div className={`${styles.modalSection} ${styles[size!]}`}>
            <ModalHeader title={title} />
            <ModalContent>{children}</ModalContent>
            <ModalFooter className={"confirmModalFooter"} buttons={confirmModalButton} />
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
