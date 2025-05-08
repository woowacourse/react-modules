import styled from "@emotion/styled";
import { createContext, ReactNode, useContext } from "react";
import Button from "./common/Button";
import useEscapeKeyClose from "./useEscapeKeyClose";
import { createPortal } from "react-dom";

type Position = "center" | "bottom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onConfirm?: () => void;
  position?: Position;
  hasTopCloseButton?: boolean;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}
/**
 * 모달 생성
 *
 @typedef {Object} ModalProps
 * @property {boolean} isOpen - 모달 열림 여부
 * @property {() => void} onClose - 모달 닫기 핸들러
 * @property {React.ReactNode} children - 모달 내용
 * @property {() => void} [onConfirm] - (선택) 확인 버튼 클릭 시 실행할 함수
 * @property {'center' | 'bottom'} [position] - (선택) 모달 위치
 * @property {boolean} [hasTopCloseButton] - (선택) 상단 닫기 버튼 표시 여부
 * @property {boolean} [primaryButton] - (선택) 확인 버튼 표시 여부
 * @property {boolean} [secondaryButton] - (선택) 취소 버튼 표시 여부
 * @property {string} [primaryButtonText] - (선택) 확인 버튼 텍스트
 * @property {string} [secondaryButtonText] - (선택) 취소 버튼 텍스트
 */

interface ModalContextType {
  onClose: () => void;
  onConfirm?: () => void;
  position: Position;
  hasTopCloseButton?: boolean;
  primaryButton?: boolean;
  primaryButtonText?: string;
  secondaryButton?: boolean;
  secondaryButtonText?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("Modal compound components must be used inside <Modal>");
  return context;
};

function Modal({
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
        <ModalContext.Provider
          value={{
            onClose,
            onConfirm,
            position,
            hasTopCloseButton,
            primaryButton,
            primaryButtonText,
            secondaryButton,
            secondaryButtonText,
          }}
        >
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
                {children}
              </ModalContent>
            </ModalContainer>
          </>
        </ModalContext.Provider>,
        document.body
      )
    : null;
}

export default Modal;

Modal.Header = ({ children }: { children: ReactNode }) => {
  const { onClose, hasTopCloseButton } = useModalContext();
  return (
    <TitleSection>
      <TitleText>{children}</TitleText>
      {hasTopCloseButton && <CloseButton onClick={onClose}>✕</CloseButton>}
    </TitleSection>
  );
};

Modal.Body = ({ children }: { children: ReactNode }) => {
  return <MainSection id="modal-description">{children}</MainSection>;
};

Modal.Footer = () => {
  const {
    onClose,
    onConfirm,
    position,
    primaryButton,
    primaryButtonText,
    secondaryButton,
    secondaryButtonText,
  } = useModalContext();

  return (
    <ButtonContainer position={position}>
      {primaryButton ? (
        <Button
          onClick={onClose}
          text={primaryButtonText}
          color="#8b95a1"
          backgroundColor="transparent"
        />
      ) : null}

      {secondaryButton ? (
        <Button text={secondaryButtonText} onClick={onConfirm} />
      ) : null}
    </ButtonContainer>
  );
};

const ModalContainer = styled.div``;

const ModalContent = styled.div<{ position: Position }>`
  height: 216px;
  width: 480px;
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

const ButtonContainer = styled.div<{ position: Position }>`
  display: flex;
  justify-content: end;
  gap: 12px;
  width: ${({ position }) =>
    position === "bottom" &&
    `
      flex-grow:1;
      width:100%;

      ${Button} button{
        width:100%;
      }
    `};
`;
