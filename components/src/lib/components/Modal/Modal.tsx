import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalClose from "../ModalClose";
import ModalTrigger from "../ModalTrigger";
import ModalRoot from "../ModalRoot";


import { StyledModal } from "./Modal.styled";

import { ModalProps } from "./Modal.types";

const Modal = ({ children, ...props }: ModalProps) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Close = ModalClose;
Modal.Trigger = ModalTrigger;
Modal.Root = ModalRoot;

export default Modal;
