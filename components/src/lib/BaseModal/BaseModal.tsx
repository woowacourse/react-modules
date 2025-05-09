import React from "react";
import { createPortal } from "react-dom";
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalBody,
  CloseButton,
} from "./BaseModal.styles";
import { IconClose } from "../IconClose";

interface ModalPropsType {
  isModalOpen: boolean;
  position?: "center" | "bottom";
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

const BaseModal = ({
  isModalOpen,
  position = "center",
  title,
  children,
  onClose,
  showCloseButton = true,
}: ModalPropsType) => {
  if (!isModalOpen) return null;

  const BaseModalContent = (
    <ModalBackground isModalOpen={isModalOpen} position={position}>
      <ModalContainer position={position}>
        <ModalHeader>
          <h4>{title}</h4>
          {showCloseButton && onClose && (
            <CloseButton onClick={onClose}>
              <IconClose />
            </CloseButton>
          )}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackground>
  );
  return createPortal(BaseModalContent, document.body);
};

export default BaseModal;
