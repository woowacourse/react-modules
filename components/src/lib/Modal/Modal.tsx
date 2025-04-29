import { ReactNode } from "react";
import { Backdrop, ModalBox, Title } from "./Modal.styles";

interface Props {
  title?: string;
  children: ReactNode;
}

const Modal = ({ title, children }: Props) => {
  return (
    <Backdrop>
      <ModalBox>
        {title && <Title>{title}</Title>}
        {children}
      </ModalBox>
    </Backdrop>
  );
};

export default Modal;
