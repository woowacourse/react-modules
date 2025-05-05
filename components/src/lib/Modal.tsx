import React from "react";
import { createPortal } from "react-dom";
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalBody,
  CloseButton,
} from "./Modal.styles";
interface ModalPropsType {
  isModalOpen: boolean;
  position: "center" | "bottom";
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({
  isModalOpen,
  position,
  title,
  children,
  onClose,
}: ModalPropsType) => {
  if (!isModalOpen) return null;

  const modalContent = (
    <ModalBackground isModalOpen={isModalOpen} position={position}>
      <ModalContainer position={position}>
        <ModalHeader>
          <h4>{title}</h4>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackground>
  );
  return createPortal(modalContent, document.body);
};

export default Modal;
