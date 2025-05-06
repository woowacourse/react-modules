import * as S from "./Modal.styles";
import { FC, ReactNode, useEffect } from "react";

/**
 * Modal 컴포넌트에 전달되는 props
 */
interface ModalProps {
  /** 모달의 열림 여부 */
  isOpen: boolean;
  /** 모달을 닫을 때 호출되는 함수 */
  handleCloseModal: () => void;
  /** 모달 내부에 표시될 내용 */
  children: ReactNode;
}

/**
 * Modal 컴포넌트 타입 정의
 *
 * - 스타일링을 커스터마이징할 수 있도록 내부 컴포넌트를 노출
 */
interface ModalComponent extends FC<ModalProps> {
  Background: typeof S.Background;
  ModalContainer: typeof S.ModalContainer;
  HeaderSection: typeof S.HeaderSection;
  Title: typeof S.Title;
  ModalCloseButton: typeof S.ModalCloseButton;
  ModalContent: typeof S.ModalContent;
}

/**
 * 재사용 가능한 Modal 컴포넌트입니다.
 *
 * - 외부에서 `isOpen`으로 모달의 열림 여부를 제어합니다.
 * - `handleCloseModal`은 클릭 또는 키보드 이벤트로 닫기 동작을 수행합니다.
 * - 내부 구조 커스터마이징이 가능합니다.
 */
const Modal: ModalComponent = ({ isOpen, handleCloseModal, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keyup", handleEsc);
    return () => window.removeEventListener("keyup", handleEsc);
  }, [handleCloseModal]);

  return isOpen ? <>{children}</> : null;
};

// 스타일링 커스터마이징을 위한 하위 컴포넌트
Modal.Background = S.Background;
Modal.ModalContainer = S.ModalContainer;
Modal.HeaderSection = S.HeaderSection;
Modal.Title = S.Title;
Modal.ModalCloseButton = S.ModalCloseButton;
Modal.ModalContent = S.ModalContent;

export default Modal;
