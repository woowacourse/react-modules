import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import styles from "./ModalContainer.module.css";

function Container({ children }: { children: React.ReactNode }) {
  const ctx = useContext(ModalContext);
  if (!ctx) return null;
  return (
    <div
      id="modal-container"
      className={`${styles.modalContents} ${styles[`${ctx.position}Width`]}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
export default Container;
