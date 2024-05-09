import { ComponentProps, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends ComponentProps<"div"> {
  onBackdropClick?: () => void;
  guidanceSize?: "small" | "medium" | "large";
  position?: "center" | "bottom";
  children: ReactNode;
}

function Container({
  onBackdropClick,
  guidanceSize = "medium",
  position = "center",
  children,
  ...restProps
}: ContainerProps) {
  return (
    <>
      <div onClick={onBackdropClick} className={styles["backdrop"]} />
      <div
        {...restProps}
        className={`${styles.container} ${styles[position]} ${styles[guidanceSize]}`}
      >
        {children}
      </div>
    </>
  );
}

export default Container;
