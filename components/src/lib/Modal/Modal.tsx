import { MouseEvent, ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
  titleColor?: string;
  position?: "center" | "bottom";
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  backgroundColor,
  titleColor,
  position = "center",
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
