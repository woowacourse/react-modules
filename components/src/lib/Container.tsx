import { CSSProperties, PropsWithChildren, useContext } from "react";
import styles from "./container.module.css";
import { ModalContext } from "./ModalContext";

type Props = {
  className?: string;
  style?: CSSProperties;
};

export default function Container({
  children,
  className,
  style,
}: PropsWithChildren<Props>) {
  const containerClassName = className ?? "";
  const innerStyle = style ?? {};
  const { position, mountAnimation, unMountAnimation, open, closing } =
    useContext(ModalContext);

  const modalClassName = closing ? unMountAnimation : mountAnimation;

  return open ? (
    <div
      className={`${styles.modal_container} ${position === "center" ? styles.center : styles.bottom} ${containerClassName} ${modalClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  ) : null;
}
