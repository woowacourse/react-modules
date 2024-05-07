import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../common/Button";
import { useModalContext } from "../hooks/useModalContext";
import { ModalContainer, ModalDimmer, ModalHeader } from "./Modal.style";

export interface ModalProps {
  modalPosition?: "center" | "bottom";
  title?: string;
  closeButtonPosition?: "top" | "bottom";
  isOpenValue?: boolean;
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  modalPosition = "center",
  title = "",
  children,
  closeButtonPosition = "top",
  isOpenValue,
}) => {
  const { isOpen, closeModal } = useModalContext();

  return (
    (isOpenValue || isOpen) && (
      <>
        <ModalDimmer onClick={closeModal} />
        <ModalContainer modalPosition={modalPosition} closeButtonPosition={closeButtonPosition}>
          <ModalHeader>
            <h1>{title}</h1>
            {closeButtonPosition === "top" && (
              <CloseButton>
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
              onClick={closeModal}
            />
          )}
        </ModalContainer>
      </>
    )
  );
};
