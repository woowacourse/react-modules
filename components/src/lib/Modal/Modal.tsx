import { MouseEvent, ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

interface Props {
  position?: "center" | "bottom";
  title?: TitleProps;
  backgroundColor?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  position = "center",
  title,
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
        {title && (
          <Title $color={title.color} $size={title.size}>
            {title.text}
          </Title>
        )}
        {children}
      </ModalBox>
    </Backdrop>
  );
};

export default Modal;
