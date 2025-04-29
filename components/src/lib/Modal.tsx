import styled from "@emotion/styled";
import Close from "/Close.svg";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode;
}

function Modal({ title, isOpen, setIsOpen, content }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay
        data-testid="modal-overlay"
        onClick={() => setIsOpen(false)}
      />
      <ModalContent>
        <TitleSection>
          <TitleText>{title}</TitleText>
          <CloseButton
            src={Close}
            alt="닫기 버튼"
            onClick={() => setIsOpen(false)}
          />
        </TitleSection>
        {content}
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  width: 304px;
  height: 216px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px 32px;
  border-radius: 8px;
  color: #000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

const CloseButton = styled.img`
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
