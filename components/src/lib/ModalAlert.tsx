import { CSSProperties, useContext, PropsWithChildren } from "react";
import { ModalContext } from "./ModalContext";
import styles from "./container.module.css";

type Props = {
  className?: string;
  style?: CSSProperties;
};

type ContentProps = {
  className?: string;
};

const Title = ({
  className = "",
  children,
}: PropsWithChildren<ContentProps>) => {
  return <h2 className={className}>{children}</h2>;
};

const Description = ({
  className = "",
  children,
}: PropsWithChildren<ContentProps>) => {
  return <p className={className}> {children}</p>;
};

const Button = ({
  children,
  className = "",
}: PropsWithChildren<ContentProps>) => {
  const { onClose } = useContext(ModalContext);

  return (
    <button className={className} type="button" onClick={onClose}>
      {children}
    </button>
  );
};

export default function ModalAlert({
  children,
  className = "",
  style,
}: PropsWithChildren<Props>) {
  const innerStyle = style ?? {};
  const {
    position,
    mountAnimation,
    unMountAnimation,
    open,
    closing,
    sizeClassName,
  } = useContext(ModalContext);

  const modalClassName = closing ? unMountAnimation : mountAnimation;

  return open ? (
    <div
      className={`${styles.modal_container} ${position === "center" ? styles.center : styles.bottom} ${className} ${modalClassName} ${sizeClassName}`}
      style={innerStyle}
    >
      {children}
    </div>
  ) : null;
}

ModalAlert.Button = Button;
ModalAlert.Title = Title;
ModalAlert.Description = Description;
