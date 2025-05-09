import { ComponentProps } from "react";
import styles from "../styles/ModalHeader.module.css";

interface HeaderProps extends ComponentProps<"header"> {
  children: React.ReactNode;
}

function Header({ children, ...props }: HeaderProps) {
  return (
    <div id="modal-header" className={styles.headerContainer}>
      <header
        {...props}
        className={styles.modalHeader}
        aria-labelledby="modal-title"
      >
        <h2 id="modal-title" className={styles.title}>
          {children}
        </h2>
      </header>
    </div>
  );
}
export default Header;
