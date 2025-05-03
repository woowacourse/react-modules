import { useContext } from "react";
import styles from "./ModalBackground.module.css";

import { ModalContext } from "./ModalContext";

// 배경
function Background({ children }: { children: React.ReactNode }) {
  const ctx = useContext(ModalContext)!;
  return (
    <div
      id="modal-background"
      className={`${styles[ctx.position]} ${styles.modalBackground}`}
      onClick={ctx.onClose}
    >
      {children}
    </div>
  );
}
export default Background;
