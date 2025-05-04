import { ComponentProps, useContext } from "react";
import { ModalContext } from "./ModalContext";
import styles from "./ModalHeader.module.css";
import closeIcon from "../../../asset/close.png";

interface HeaderProps extends ComponentProps<"header"> {
  children: React.ReactNode;
}

function Header({ children, ...props }: HeaderProps) {
  const ctx = useContext(ModalContext);
  return (
    <header {...props} className={styles.modalHeader}>
      <h2 className={styles.title}>{children}</h2>
      <img
        id="modal-close-button"
        className={styles.closeButton}
        src={closeIcon}
        alt="닫기"
        onClick={ctx?.onClose}
      />
    </header>
  );
}
export default Header;
