import styles from "./Modal.module.css";
import { PropsWithChildren } from "react";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import { ButtonProps } from "./Button/Button";

type PositionProps = "top" | "center" | "bottom";
type SizeProps = "small" | "medium" | "large";

export interface TitleProps {
  position: "left" | "center";
  content: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

interface ModalProps {
  position: PositionProps;
  size: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  onClose: () => void;
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
  footerButtons,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.container} ${styles[position]}`}>
          <div className={styles.backDrop} onClick={onClose}></div>
          <div className={`${styles.modalSection} ${styles[size]}`}>
            <ModalHeader title={title} closeButton={closeButton} />
            <ModalContent children={children} />
            {footerButtons && <ModalFooter buttons={footerButtons} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
