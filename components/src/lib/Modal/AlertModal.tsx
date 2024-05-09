import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { PositionProps, SizeProps, TitleProps } from "./Modal";
import styles from "./Modal.module.css";

interface AlertModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onConfirm: () => void;
}

const AlertModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  onConfirm,
}: PropsWithChildren<AlertModalProps>) => {
  const alertModalButton = [
    {
      content: "확인",
      onClick: onConfirm,
      className: "alertButton",
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
            <ModalFooter className={"alertModalFooter"} buttons={alertModalButton} />
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
