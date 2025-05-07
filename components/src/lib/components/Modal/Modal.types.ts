import { ReactNode } from "react";
import { FC } from "react";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContent from "../ModalContent/ModalContent";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "../../hooks/useModal";

import { ModalOverlayProps } from "../ModalOverlay/ModalOverlay.types";

export interface ModalInternalProps extends ModalProps, ModalOverlayProps {}

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export interface ModalCompoundComponent extends FC<ModalInternalProps> {
  Overlay: typeof ModalOverlay;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  CloseButton: typeof ModalCloseButton;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  useModal: typeof useModal;
}
