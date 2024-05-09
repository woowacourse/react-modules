import { CSSProperties, PropsWithChildren, useContext } from "react";
import styles from "./container.module.css";
import { ModalContext } from "./ModalContext";

type Props = {
  className?: string;
  style?: CSSProperties;
  size?: "small" | "medium" | "large" | "";
};

export default function Container({
  children,
  className,
  style,
  size = "",
}: PropsWithChildren<Props>) {
  const containerClassName = className ?? "";
  const innerStyle = style ?? {};
  const { position, mountAnimation, unMountAnimation, open, closing } =
    useContext(ModalContext);

  const modalClassName = closing ? unMountAnimation : mountAnimation;

  const sizeClassName =
    size === "large"
      ? styles.large
      : size === "medium"
        ? styles.medium
        : size === "small"
          ? styles.small
          : "";

  return open ? (
    <div
      className={`${styles.modal_container} ${position === "center" ? styles.center : styles.bottom} ${containerClassName} ${modalClassName} ${sizeClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  ) : null;
}
