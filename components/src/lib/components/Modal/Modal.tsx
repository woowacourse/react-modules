import { StyledModal } from "./Modal.styled";

import { ModalProps } from "./Modal.types";

const Modal = ({ children, ...props }: ModalProps) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

export default Modal;
