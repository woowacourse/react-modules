import { ComponentProps, useContext } from "react";
import { ModalContext } from "./ModalContext";
import styles from "./ModalContainer.module.css";

interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

function Container({ children, ...props }: ContainerProps) {
  const ctx = useContext(ModalContext);
  if (!ctx) return null;
  return (
    <div
      {...props}
      id="modal-container"
      className={`${styles.modalContents} ${styles[`${ctx.position}Width`]}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
export default Container;
