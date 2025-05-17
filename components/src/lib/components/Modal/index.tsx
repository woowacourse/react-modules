import ModalOverlay from "../ModalOverlay";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle";
import ModalClose from "../ModalClose";
import ModalTrigger from "../ModalTrigger";
import ModalRoot, { useModal } from "../ModalRoot";

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
