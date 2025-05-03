import { ComponentProps, useContext } from "react";
import styles from "./ModalBackground.module.css";

import { ModalContext } from "./ModalContext";

interface BackgroundProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

function Background({ children, ...props }: BackgroundProps) {
  const ctx = useContext(ModalContext)!;
  return (
    <div
      {...props}
      id="modal-background"
      className={`${styles[ctx.position]} ${styles.modalBackground}`}
      onClick={ctx.onClose}
    >
      {children}
    </div>
  );
}
export default Background;
