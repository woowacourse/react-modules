import styled from "@emotion/styled";
import { ReactNode, useRef } from "react";
import useEscapeKeyClose from "../useEscapeKeyClose";
import { createPortal } from "react-dom";
import { ModalContext, Position } from "../useModalContext";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useFocusTrap } from "../useFocusTrap";

export type Size = "small" | "medium" | "large";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onConfirm?: () => void;
  position?: Position;
  hasTopCloseButton?: boolean;
  size?: Size;
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
 * @property {Size} [size] - (선택) 모달 사이즈

 */

function Modal({
  isOpen,
  onClose,
  onConfirm,
  position = "center",
  children,
  hasTopCloseButton = false,
  size = "small",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, isOpen);
  useEscapeKeyClose({ isOpen, onClose });

  return isOpen
    ? createPortal(
        <ModalContext.Provider
          value={{
            onClose,
            onConfirm,
            position,
            hasTopCloseButton,
          }}
        >
          <>
            <ModalOverlay data-testid="modal-overlay" onClick={onClose} />
            <ModalContainer ref={modalRef}>
              <ModalContent
                position={position}
                size={size}
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

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.PrimaryButton = PrimaryButton;
Modal.SecondaryButton = SecondaryButton;

const ModalContainer = styled.div``;

const ModalContent = styled.div<{ position: Position; size: Size }>`
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

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
        width: 320px;
        height: 206px;
      `;
      case "medium":
        return `
        width: 480px;
        height: 206px;
      `;
      default:
        return `
        width: 600px;
        height: 206px;
      `;
    }
  }}

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
