import { ComponentProps } from "react";
import styles from "./ModalHeader.module.css";

interface HeaderProps extends ComponentProps<"header"> {
  children: React.ReactNode;
}

function Header({ children, ...props }: HeaderProps) {
  return (
    <div id="modal-header" className={styles.headerContainer}>
      <header {...props} className={styles.modalHeader}>
        <h2 className={styles.title}>{children}</h2>
      </header>
    </div>
  );
}
export default Header;
