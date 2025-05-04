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
      <Wrapper className={position} onClick={handleBackdropClick}>
        <ModalContainer
          className={position}
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  &.center {
    align-items: center;
  }

  &.bottom {
    align-items: flex-end;
  }

  &.top {
    align-items: flex-start;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 304px;
  min-height: 216px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 24px 32px;

  &.center {
    border-radius: 8px;
  }

  &.bottom {
    border-radius: 8px 8px 0 0;
  }

  &.top {
    border-radius: 0 0 8px 8px;
  }
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
