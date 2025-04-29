import { MouseEvent, ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface Props {
  position?: "center" | "bottom";
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  position = "center",
  title,
  titleColor,
  backgroundColor,
  children,
  isOpen,
  onClose,
}: Props) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Backdrop $isOpen={isOpen} $position={position} onClick={onClose}>
      <ModalBox
        $backgroundColor={backgroundColor}
        $position={position}
        onClick={stopPropagation}
      >
        {title && <Title $titleColor={titleColor}>{title}</Title>}
        {children}
      </ModalBox>
    </Backdrop>
  );
};

export default Modal;
