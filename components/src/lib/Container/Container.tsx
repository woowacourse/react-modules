import { ReactNode } from "react";
import styles from "./Container.module.css";

function Container({
  onBackdropClick,
  size = "medium",
  position = "center",
  children,
}: {
  onBackdropClick?: () => void;
  size?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  children: ReactNode;
}) {
  return (
    <>
      <div onClick={onBackdropClick} className={styles["backdrop"]} />
      <div
        className={`${styles.container} ${styles[position]} ${styles[size]}`}
      >
        {children}
      </div>
    </>
  );
}

export default Container;
