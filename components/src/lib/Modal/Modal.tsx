import React from "react";
import { DarkButton, LightButton } from "../common/Button";
import {
  ModalContainer,
  ModalDim,
  ModalHeader,
  ModalContent,
  ModalButtonGroup,
} from "./Modal.style";

export type ModalPosition = "center" | "bottom";
export type ModalSize = "small" | "medium" | "large";
export type ModalType = "alert" | "confirm" | "prompt";
export type CloseButtonPosition = "top" | "bottom";

export interface ModalProps {
  modalPosition: ModalPosition;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  size: ModalSize;
  modalType?: ModalType;
  closeButtonPosition?: CloseButtonPosition;
}

export const Modal = ({
  modalPosition,
  title,
  children,
  isOpen,
  onClose,
  size,
  modalType,
  closeButtonPosition,
}: ModalProps) => {
  if (!isOpen) return null;

  const renderButtons = () => {
    switch (modalType) {
      case "alert":
        return (
          <ModalButtonGroup>
            <DarkButton children="확인" onClick={onClose} />
          </ModalButtonGroup>
        );
      case "confirm":
        return (
          <ModalButtonGroup>
            <LightButton children="취소" onClick={onClose} />
            <DarkButton children="확인" onClick={onClose} />
          </ModalButtonGroup>
        );
      case "prompt":
        return (
          <>
            <input
              type="text"
              style={{
                width: "100%",
                height: "32px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid rgba(0, 0, 0, 1)",
                background: "rgba(255, 255, 255, 1)",
              }}
            />
            <ModalButtonGroup>
              <LightButton children="취소" onClick={onClose} />
              <DarkButton children="확인" onClick={onClose} />
            </ModalButtonGroup>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ModalDim isOpen={isOpen} onClick={onClose}>
      <ModalContainer
        modalPosition={modalPosition}
        size={size}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h1>{title}</h1>
          {!modalType && closeButtonPosition === "top" && (
            <LightButton onClick={onClose} style={{ width: "26px", height: "26px", padding: "0" }}>
              <img src="/public/image/closeButton.png" alt="Close" />
            </LightButton>
          )}
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        {!modalType && closeButtonPosition === "bottom" ? (
          <DarkButton children="닫기" onClick={onClose} style={{ width: "100%" }} />
        ) : (
          renderButtons()
        )}
      </ModalContainer>
    </ModalDim>
  );
};
