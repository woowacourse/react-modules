import styled from "@emotion/styled";
import CloseButton from "../components/CloseButton/CloseButton";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";

type ModalProps = {
  position: "center" | "bottom" | "top";
  title: string;
  content: React.ReactNode;
  hasCloseButton: boolean;
  onClose: () => void;
  handleBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  confirmText?: string;
  onConfirm?: () => void;
};

const Modal = ({
  position,
  title,
  content,
  hasCloseButton,
  onClose,
  handleBackdropClick,
  confirmText = "확인",
  onConfirm,
}: ModalProps) => {
  return (
    <Overlay>
      <Wrapper position={position} onClick={handleBackdropClick}>
        <ModalContainer
          position={position}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseButtonWrapper>
              {hasCloseButton && <CloseButton onClose={onClose} />}
            </CloseButtonWrapper>
          </ModalHeader>
          <ModalContent>{content}</ModalContent>
          <ModalFooter>
            {onConfirm && (
              <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
            )}
          </ModalFooter>
        </ModalContainer>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Wrapper = styled.div<{ position: "center" | "bottom" | "top" }>`
  display: flex;
  justify-content: center;
  align-items: ${({ position }) =>
    position === "bottom"
      ? "flex-end"
      : position === "top"
      ? "flex-start"
      : "center"};
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div<{ position: "center" | "bottom" | "top" }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ position }) =>
    position === "bottom"
      ? "8px 8px 0 0"
      : position === "top"
      ? "0 0 8px 8px"
      : "8px"};
  width: 304px;
  min-height: 216px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px 32px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 24px;
`;

const ModalFooter = styled.div`
  margin-top: auto;
  text-align: center;
  justify-content: flex-end;
`;