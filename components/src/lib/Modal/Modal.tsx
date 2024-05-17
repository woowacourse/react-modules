import styles from "./Modal.module.css";
import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { ButtonProps } from "../Button/Button";

type PositionProps = "top" | "center" | "bottom";
type SizeProps = "small" | "medium" | "large";

export interface TitleProps {
  position: "left" | "center";
  content: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface ModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onClose?: () => void;
  footerClassName?: string;
  closeButton?: CloseButtonProps;
  footerButtons?: ButtonProps[];
}

const Modal = ({
  position,
  size,
  title,
  children,
  isOpen,
  onClose,
  closeButton,
  footerClassName,
  footerButtons,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.modal} ${styles.container} ${styles[position]}`}>
          <div className={styles.backDrop} onClick={onClose} />
          <div className={`${styles.modalSection} ${styles[size!]}`}>
            <ModalHeader title={title} closeButton={closeButton} />
            <ModalContent>{children}</ModalContent>
            {footerButtons && (
              <ModalFooter className={footerClassName || "modalFooter"} buttons={footerButtons} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
