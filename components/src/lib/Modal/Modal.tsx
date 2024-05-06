import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../common/Button";
import { ModalContainer, ModalDimmer, ModalHeader } from "./Modal.style";

export interface ModalProps {
  modalPosition: "center" | "bottom";
  title: string;
  children: React.ReactNode;
  closeButtonPosition: "top" | "bottom";
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Modal: React.FC<ModalProps> = ({
  modalPosition,
  title,
  children,
  closeButtonPosition,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDimmer $isOpen={isOpen} onClick={(e) => onClose(e)}>
      <ModalContainer modalPosition={modalPosition} closeButtonPosition={closeButtonPosition}>
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
    </ModalDimmer>
  );
};
