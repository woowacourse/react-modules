import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../common/Button";
import { ModalContainer, ModalDim, ModalHeader } from "./Modal.style";

export type ModalPosition = "center" | "bottom";
export type CloseButton = "top" | "bottom";
export type ModalSize = "small" | "medium" | "large";
export interface ModalProps {
  modalPosition: ModalPosition;
  title: string;
  children: React.ReactNode;
  closeButtonPosition: CloseButton;
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  size: ModalSize;
}

export const Modal = ({
  modalPosition,
  title,
  children,
  closeButtonPosition,
  isOpen,
  onClose,
  size,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalDim isOpen={isOpen} onClick={onClose}>
      <ModalContainer
        modalPosition={modalPosition}
        closeButtonPosition={closeButtonPosition}
        size={size}
      >
        <ModalHeader>
          <h1>{title}</h1>
          {closeButtonPosition === "top" && (
            <CloseButton onClick={(e) => onClose(e)}>
              <img src="/public/image/closeButton.png" />
            </CloseButton>
          )}
        </ModalHeader>
        {children}
        {closeButtonPosition === "bottom" && (
          <Button
            content="닫기"
            backgroundColor="rgba(255, 255, 255, 1)"
            fontColor="rgba(139, 149, 161, 1)"
            onClick={(e) => onClose(e)}
          />
        )}
      </ModalContainer>
    </ModalDim>
  );
};
