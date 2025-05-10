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
  style?: CSSProperties;
}

export type ModalPositionType = 'center' | 'bottom';
export type ModalSizeType = 'small' | 'medium' | 'large';

// ============================== Component ==============================

function ModalContainer({
  position = 'center',
  size = 'medium',
  style,
  children,
}: PropsWithChildren<ModalProps>) {
  const { role, open, onClose } = useModalContext();

  const isClickOutsideEnabled = role !== 'alert-modal';
  const modalRef = useClickOutside<HTMLDivElement>(
    onClose,
    isClickOutsideEnabled
  );

  useEffect(
    function handleEscapeKeyClose() {
      if (!open) return;

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleKeydown);
      return () => {
        document.removeEventListener('keydown', handleKeydown);
      };
    },
    [open, onClose]
  );

  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    open && (
      <StyledModalContainer position={position}>
        <StyledModalContent
          ref={modalRef}
          position={position}
          size={size}
          style={memoizedStyle}
        >
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

const Modal = Object.assign(ModalProvider, {
  Container: ModalContainer,
  ButtonTrigger,
  CloseButton,
  Title,
  PromptInput,
  ButtonWrapper,
  Button,
});

export default Modal;
