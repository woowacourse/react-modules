import { CSSProperties, useContext, PropsWithChildren } from "react";
import { ModalContext } from "./ModalContext";
import styles from "./container.module.css";
import { Title, Description } from "./ModalAlert";

type ConfirmButtonProps = {
  className?: string;
  onConfirm: () => void;
};

const ConfirmButton = ({
  className = "",
  onConfirm,
  children,
}: PropsWithChildren<ConfirmButtonProps>) => {
  return (
    <button type="button" onClick={onConfirm} className={className}>
      {children}
    </button>
  );
};

type Props = {
  className?: string;
  style?: CSSProperties;
};

export default function ModalConfirm({
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

ModalConfirm.ConfirmButton = ConfirmButton;
ModalConfirm.Title = Title;
ModalConfirm.Description = Description;
