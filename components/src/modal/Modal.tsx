import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, useEffect, useMemo } from 'react';
import CloseButton from './CloseButton';
import useClickOutside from './hooks/useClickOutside';
import {
  MODAL_CONTAINER_POSITION_STYLES,
  MODAL_CONTENT_POSITION_STYLES,
  MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES,
  MODAL_CONTENT_SIZE_STYLES,
} from './Modal.styles';
import Title from './Title';
import ModalProvider, { useModalContext } from './ModalProvider';
import ButtonWrapper from './ButtonWrapper';
import PromptInput from './PromptInput';
import Button from './Button';
import ButtonTrigger from './ButtonTrigger';

// ============================== Types ==============================

interface ModalProps {
  position?: ModalPositionType;
  size?: ModalSizeType;
  title?: string;
  showCloseButton?: boolean;
  style?: CSSProperties;
}

export type ModalPositionType = 'center' | 'bottom';
export type ModalSizeType = 'small' | 'medium' | 'large';

// ============================== Component ==============================

function ModalContainer({
  position = 'center',
  size = 'medium',
  title = '',
  showCloseButton = true,
  style,
  children,
}: PropsWithChildren<ModalProps>) {
  const { role, open, onClose } = useModalContext();

  const isClickOutsideEnabled = role !== 'alert-modal';
  const modalRef = useClickOutside<HTMLDivElement>(
    onClose,
    isClickOutsideEnabled
  );

  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  useEffect(
    function handleBodyScrollLock() {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    },
    [open]
  );

  useEffect(
    function handleModalOpenEffects() {
      if (!open) return;

      const allFocusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const focusableList = Array.from(allFocusable || []).filter(
        (element) =>
          !element.hasAttribute('disabled') && element.tabIndex !== -1
      );

      console.log(allFocusable);

      // 모달 열릴 때 첫 번째 포커스
      if (allFocusable && allFocusable.length > 0) {
        // 첫 번째 요소가 모달 닫기 버튼인 경우, 두 번째 요소에 포커스
        if (allFocusable[0].getAttribute('aria-label') !== '모달 닫기 버튼') {
          allFocusable[0].focus();
        } else {
          allFocusable[1]?.focus();
        }
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        // ESC 키로 닫기
        if (event.key === 'Escape') {
          onClose();
          return;
        }

        if (event.key !== 'Tab' || !focusableList.length) return;

        const firstElement = focusableList[0];
        const lastElement = focusableList[focusableList.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [open, onClose]
  );

  return (
    open && (
      <StyledModalContainer position={position}>
        <StyledModalContent
          ref={modalRef}
          position={position}
          size={size}
          style={memoizedStyle}
        >
          {title && <Title>{title}</Title>}
          {showCloseButton && <FixedCloseButton />}
          {children}
        </StyledModalContent>
      </StyledModalContainer>
    )
  );
}

// ============================== Styled Components ==============================

const StyledModalContainer = styled.div<{ position: ModalPositionType }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);

  ${(props) => MODAL_CONTAINER_POSITION_STYLES[props.position]}
`;

const StyledModalContent = styled.div<{
  position: ModalPositionType;
  size: ModalSizeType;
}>`
  min-width: 400px;
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 24px 32px;
  box-sizing: border-box;
  background-color: white;

  ${(props) => MODAL_CONTENT_SIZE_STYLES[props.size]}
  ${(props) => MODAL_CONTENT_POSITION_STYLES[props.position]}

  @media (max-width: 600px) {
    ${(props) => MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES[props.position]};
  }
`;

const FixedCloseButton = styled(CloseButton)`
  position: absolute;
  top: 24px;
  right: 32px;
`;

const Modal = Object.assign(ModalProvider, {
  Content: ModalContainer,
  ButtonTrigger,
  CloseButton,
  Title,
  PromptInput,
  ButtonWrapper,
  Button,
});

export default Modal;
