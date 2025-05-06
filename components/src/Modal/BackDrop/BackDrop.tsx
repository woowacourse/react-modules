import { useContext } from "react";
import { ModalContext } from "../Modal";
import { ModalBackDrop } from "./BackDrop.styled";

type ModalBackDropProps = {
  className?: string;
  children?: React.ReactNode;
  styled?: React.CSSProperties;
};

export const BackDrop = ({
  className,
  children,
  styled,
}: ModalBackDropProps) => {
  const modalContext = useContext(ModalContext);

  return (
    <ModalBackDrop
      className={className}
      onClick={modalContext.onClose}
      $position={modalContext.position}
      style={styled}
    >
      {children}
    </ModalBackDrop>
  );
};
