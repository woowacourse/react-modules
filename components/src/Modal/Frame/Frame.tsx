import { useContext } from "react";
import { ModalContext } from "../Modal";
import { ModalFrame } from "./Frame.styled";

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

  return (
    <ModalFrame
      className={className}
      $position={modalContext.position}
      onClick={(event) => event.stopPropagation()}
      style={styled}
    >
      {children}
    </ModalFrame>
  );
};
