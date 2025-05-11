import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalClose from "../ModalClose";
import ModalTrigger from "../ModalTrigger";
import ModalRoot from "../ModalRoot";

import { useModal } from "../ModalRoot";

import { StyledModal } from "./Modal.styled";

import { ModalProps } from "./Modal.types";

const Modal = ({ children }: ModalProps) => {
  const { isOpen } = useModal();

  return <StyledModal isOpen={isOpen}>{children}</StyledModal>;
};

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Title = ModalTitle;
Modal.Close = ModalClose;
Modal.Trigger = ModalTrigger;
Modal.Root = ModalRoot;

export default Modal;
