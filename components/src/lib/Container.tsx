import { CSSProperties, PropsWithChildren } from "react";
import styles from "./container.module.css";

type Props = {
  className?: string;
  style?: CSSProperties;
  position?: "center" | "bottom";
};

export default function Container({
  children,
  className,
  style,
  position = "center",
}: PropsWithChildren<Props>) {
  const containerClassName = className ?? "";
  const innerStyle = style ?? {};

  return (
    <div
      className={`${styles.modal_container} ${position === "center" ? styles.center : styles.bottom} ${containerClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  );
}
