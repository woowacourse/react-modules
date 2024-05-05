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
  const { position } = useContext(ModalContext);

  return (
    <div
      className={`${styles.modal_container} ${position === "center" ? styles.center : styles.bottom} ${containerClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  );
}
