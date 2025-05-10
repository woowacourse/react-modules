import { useModal } from "../ModalContext";
import styles from "./ModalHeader.module.css";
import closeIcon from "../../asset/close.png";

interface ModalHeaderProps {
  children: React.ReactNode;
  hasCloseButton?: boolean;
}

export default function ModalHeader({
  children,
  hasCloseButton = false,
}: ModalHeaderProps) {
  const { onClose } = useModal();

  return (
    <header className={styles.modalHeader}>
      <p className={styles.title}>{children}</p>
      {hasCloseButton && (
        <img
          className={styles.closeButton}
          src={closeIcon}
          alt="닫기버튼"
          onClick={onClose}
          id="modal-close-button"
        />
      )}
    </header>
  );
}
