import { ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
  titleColor?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  backgroundColor,
  titleColor,
}: Props) => {
  return (
    <Backdrop $isOpen={isOpen} onClick={onClose}>
      <ModalBox $backgroundColor={backgroundColor}>
        {title && <Title $titleColor={titleColor}>{title}</Title>}
        {children}
      </ModalBox>
    </Backdrop>
  );
};

export default Modal;
