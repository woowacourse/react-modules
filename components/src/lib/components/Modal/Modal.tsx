import { ReactNode } from "react";
import { StyledModal } from "./Modal.styled";

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  position?: "bottom" | "center";
}

const Modal = ({ children, ...props }: ModalProps) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

export default Modal;
