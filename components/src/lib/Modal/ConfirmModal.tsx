import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { PositionProps, SizeProps, TitleProps } from "./Modal";
import styles from "./Modal.module.css";
import { ButtonProps } from "../Button/Button";

interface ConfirmModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  footerButtons: ButtonProps[];
}

const ConfirmModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  footerButtons,
}: PropsWithChildren<ConfirmModalProps>) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.alertModal} ${styles.container} ${styles[position]}`}>
          <div className={styles.backDrop}></div>
          <div className={`${styles.modalSection} ${styles[size!]}`}>
            <ModalHeader title={title} />
            <ModalContent children={children} />
            <ModalFooter className={"confirmModalFooter"} buttons={footerButtons} />
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
