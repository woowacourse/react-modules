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
import useFocus from "../autoFocus/autoFocus";

interface ModalPropsType {
  isModalOpen: boolean;
  position?: "center" | "bottom";
  size?: "small" | "medium" | "large";
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

const BaseModal = ({
  isModalOpen,
  position = "center",
  size = "small",
  title,
  children,
  onClose,
  showCloseButton = true,
}: ModalPropsType) => {
  const { modalRef } = useFocus(isModalOpen);
  if (!isModalOpen) return null;

  const BaseModalContent = (
    <ModalBackground isModalOpen={isModalOpen} position={position}>
      <ModalContainer position={position} size={size} ref={modalRef}>
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
