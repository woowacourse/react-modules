import { ReactNode } from "react";
import { Backdrop, ModalBox } from "./Modal.styles";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <Backdrop>
      <ModalBox>{children}</ModalBox>
    </Backdrop>
  );
};

export default Modal;
