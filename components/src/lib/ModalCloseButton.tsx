import { CSSProperties, PropsWithChildren, useContext } from "react";
import { ModalContext } from "./ModalContext";

type Props = {
  className?: string;
  style?: CSSProperties;
};

export default function ModalCloseButton({
  children,
  className,
  style,
}: PropsWithChildren<Props>) {
  const buttonClassName = className ?? "";
  const innerStyle = style ?? {};
  const { onClose } = useContext(ModalContext);

  return (
    <button
      type="button"
      onClick={onClose}
      className={buttonClassName}
      style={innerStyle}
    >
      {children}
    </button>
  );
}
