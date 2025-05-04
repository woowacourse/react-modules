import { default as ModalContainer } from './Modal';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';

/**
 * Modal 컴포넌트는 모달 UI를 구성하는 모든 하위 컴포넌트를 포함한 객체입니다.
 *
 * 사용 예시:
 * ```tsx
 * <Modal>
 *   <Modal.ModalContainer>
 *     <Modal.ModalTitle>제목</Modal.ModalTitle>
 *     <Modal.ModalBody>내용</Modal.ModalBody>
 *     <Modal.ModalCloseButton />
 *   </Modal.ModalContainer>
 * </Modal>
 * ```
 */
export const Modal = Object.assign(ModalOverlay, {
  /** 모달의 컨테이너 영역입니다. 보통 타이틀, 바디, 닫기 버튼 등을 포함합니다. */
  ModalContainer: ModalContainer,

  /** 모달 본문 영역입니다. 주요 내용을 표시합니다. */
  ModalBody: ModalBody,

  /** 모달을 닫는 버튼입니다. 보통 우측 상단에 위치합니다. */
  ModalCloseButton: ModalCloseButton,

  /** 모달 제목을 표시하는 컴포넌트입니다. */
  ModalTitle: ModalTitle,
});
