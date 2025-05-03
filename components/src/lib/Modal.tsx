import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import Button from "./common/Button";

type Position = "center" | "bottom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  position?: Position;
  hasTopCloseButton?: boolean;
  hasBottomCloseButton?: boolean;
  hasConfirmButton?: boolean;
  children: ReactNode;
}

function Modal({
  title,
  isOpen,
  onClose,
  onConfirm,
  position = "center",
  children,
  hasTopCloseButton = true,
  hasBottomCloseButton = false,
  hasConfirmButton = false,
}: ModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay data-testid="modal-overlay" onClick={onClose} />
      <ModalContent position={position}>
        <TitleSection>
          <TitleText>{title}</TitleText>
          {hasTopCloseButton ? (
            <CloseButton onClick={onClose}>✕</CloseButton>
          ) : null}
        </TitleSection>
        <MainSection>
          {children}
          {hasConfirmButton ? (
            <Button text="동의하고 저장하기" onClick={onConfirm} />
          ) : null}
          {hasBottomCloseButton ? (
            <Button
              text="닫기"
              onClick={onClose}
              color="#8b95a1"
              backgroundColor="transparent"
            />
          ) : null}
        </MainSection>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

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

const CloseButton = styled.div`
  cursor: pointer;
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const MainSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
