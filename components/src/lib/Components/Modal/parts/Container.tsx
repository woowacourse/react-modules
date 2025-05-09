import { ComponentProps, useContext } from "react";
import { ModalContext } from "../ModalContext";
import styles from "../styles/ModalContainer.module.css";
import closeIcon from "../../../../asset/close.png";
interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
}

function Container({ children, size = "medium", ...props }: ContainerProps) {
  const ctx = useContext(ModalContext);
  if (!ctx) return null;

  const sizeClass = ctx.position === "bottom" ? styles.full : styles[size];

  const combined = [styles.modalContents, sizeClass].join(" ");

  return (
    <div
      {...props}
      id="modal-container"
      className={combined}
      onClick={(e) => e.stopPropagation()}
      role={ctx.dialogType === "alert" ? "alertdialog" : "dialog"}
      aria-modal="true"
    >
      <img
        id="modal-close-button"
        className={styles.closeButton}
        src={closeIcon}
        alt="닫기"
        onClick={ctx?.onClose}
        hidden={ctx.dialogType !== "default"}
      />
      {children}
    </div>
  );
}
export default Container;
