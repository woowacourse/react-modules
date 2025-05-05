import { FC } from "react";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "../../hooks/useModal";

import { StyledModal } from "./Modal.styled";

import { ModalProps } from "./Modal.types";

interface ModalCompoundComponent extends FC<ModalProps> {
  Overlay: typeof ModalOverlay;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  CloseButton: typeof ModalCloseButton;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  useModal: typeof useModal;
}

const Modal: ModalCompoundComponent = ({ children, ...props }) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.useModal = useModal;

export default Modal;
