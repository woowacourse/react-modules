import { ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface Props {
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
  titleColor?: string;
}

const Modal = ({ title, children, backgroundColor, titleColor }: Props) => {
  return (
    <Backdrop>
      <ModalBox $backgroundColor={backgroundColor}>
        {title && <Title $titleColor={titleColor}>{title}</Title>}
        {children}
      </ModalBox>
    </Backdrop>
  );
};

export default Modal;
