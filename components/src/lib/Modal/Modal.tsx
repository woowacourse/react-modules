import styled from "@emotion/styled";
import CloseButton from "../components/CloseButton/CloseButton";
import ConfirmButton from "../components/ConfirmButton/ConfirmButton";
import CancelButton from "../components/CancelButton/CancelButton";
import Input from "../components/Input/Input";
import { useEffect, useRef } from "react";

type ModalProps = {
  type?: "alert" | "confirm" | "prompt";
  position?: "center" | "bottom" | "top";
  size?: "small" | "medium" | "large";
  title?: string;
  content?: React.ReactNode;
  handleBackdropClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  hasCloseButton?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  inputTitle?: string;
};

const Modal = ({
  type = "alert",
  position = "center",
  size = "small",
  title = "알림",
  content = "내용이 없습니다.",
  handleBackdropClick,
  hasCloseButton = true,
  onClose,
  onConfirm,
  confirmText = "확인",
  cancelText = "취소",
  inputTitle = "입력해주세요.",
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusableSelectors = [
      "button",
      "a[href]",
      "input",
      "textarea",
      "select",
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      focusableSelectors.join(","),
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (!first || !last) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleKeyDown);
    return () => modal.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Overlay>
      <Wrapper position={position} onClick={handleBackdropClick}>
        <ModalContainer
          position={position}
          size={size}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
        >
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseButtonWrapper>
              {hasCloseButton && <CloseButton onClose={onClose} />}
            </CloseButtonWrapper>
          </ModalHeader>
          {type !== "prompt" && <ModalContent>{content}</ModalContent>}

          {type === "prompt" && (
            <InputContainer>
              <Input title={inputTitle} />
            </InputContainer>
          )}

          <ModalFooter>
            {type === "alert" && (
              <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
            )}

            {(type === "confirm" || type === "prompt") && (
              <Buttons>
                <CancelButton cancelText={cancelText} onClick={onClose} />
                <ConfirmButton confirmText={confirmText} onClick={onConfirm} />
              </Buttons>
            )}
          </ModalFooter>
        </ModalContainer>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;

const positionMap: Record<"center" | "bottom" | "top", string> = {
  center: "center",
  top: "flex-start",
  bottom: "flex-end",
};

const borderRadiusMap: Record<"center" | "bottom" | "top", string> = {
  center: "8px",
  bottom: "8px 8px 0 0",
  top: "0 0 8px 8px",
};

const sizeMap: Record<"small" | "medium" | "large", string> = {
  small: "304px",
  medium: "40%",
  large: "70%",
};

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
  align-items: ${({ position }) => positionMap[position]};
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div<{
  position: "center" | "bottom" | "top";
  size: "small" | "medium" | "large";
}>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ position }) => borderRadiusMap[position]};
  width: ${({ size }) => sizeMap[size]};
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
  margin: 0;
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

const Buttons = styled.div`
  display: flex;
  gap: 7px;
`;

const InputContainer = styled.div`
  display: flex;
`;
