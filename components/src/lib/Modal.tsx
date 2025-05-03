import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import Button from "./common/Button";
import useEscapeKeyClose from "./useEscapeKeyClose";
import { createPortal } from "react-dom";

type Position = "center" | "bottom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  position?: Position;
  hasTopCloseButton?: boolean;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  children: ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function Modal({
  title,
  isOpen,
  onClose,
  onConfirm,
  position = "center",
  children,
  hasTopCloseButton = true,
  primaryButton = false,
  secondaryButton = false,
  primaryButtonText,
  secondaryButtonText,
}: ModalProps) {
  useEscapeKeyClose({ isOpen, onClose });

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay data-testid="modal-overlay" onClick={onClose} />
          <ModalContainer>
            <ModalContent
              position={position}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              aria-hidden={!isOpen}
            >
              <TitleSection>
                <TitleText id="modal-title">{title}</TitleText>
                {hasTopCloseButton ? (
                  <CloseButton onClick={onClose}>✕</CloseButton>
                ) : null}
              </TitleSection>
              <MainSection id="modal-description">
                {children}
                {primaryButton ? (
                  <Button onClick={onConfirm} text={primaryButtonText} />
                ) : null}
                {secondaryButton ? (
                  <Button
                    text={secondaryButtonText}
                    onClick={onClose}
                    color="#8b95a1"
                    backgroundColor="transparent"
                  />
                ) : null}
              </MainSection>
            </ModalContent>
          </ModalContainer>
        </>,
        document.body
      )
    : null;
}

export default Modal;

const ModalContainer = styled.div``;

const ModalContent = styled.div<{ position: Position }>`
  height: 216px;
  width: 304px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px 32px;
  border-radius: 8px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ position }) =>
    position === "bottom" &&
    `
      width: 100%;
      top: auto;
      left: 0;
      transform: none;
      bottom: 0;
    `}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

const CloseButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleText = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const MainSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
