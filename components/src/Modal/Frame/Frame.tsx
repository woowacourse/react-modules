import { useContext } from "react";
import { ModalContext } from "../Modal";
import { ModalFrame } from "./Frame.styled";
import useFocus from "../hooks/useModalFocus";

type ModalFrameProps = {
  className?: string;
  children?: React.ReactNode;
  styled?: React.CSSProperties;
};

export const Frame = ({
  className = "",
  children,
  styled,
}: ModalFrameProps) => {
  const modalContext = useContext(ModalContext);
  const { modalRef } = useFocus(modalContext.isOpen);

  return (
    <ModalFrame
      ref={modalRef}
      className={className}
      $position={modalContext.position}
      onClick={(event) => event.stopPropagation()}
      style={styled}
      size={modalContext.size}
    >
      {children}
    </ModalFrame>
  );
};
