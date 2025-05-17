import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import CloseButton from './CloseButton';
import { useBodyScrollLock } from './hooks/useBodyScrollLock';
import useClickOutside from './hooks/useClickOutside';
import { useModalAccessibility } from './hooks/useModalAccessibility';
import {
  MODAL_CONTAINER_POSITION_STYLES,
  MODAL_CONTENT_POSITION_STYLES,
  MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES,
  MODAL_CONTENT_SIZE_STYLES,
} from './Modal.styles';
import ModalCloseTrigger from './ModalCloseTrigger';
import ModalOpenTrigger from './ModalOpenTrigger';
import ModalProvider, { useModalContext } from './ModalProvider';
import PromptInput from './PromptInput';
import Title from './Title';
import WideButton from './WideButton';

// ============================== Types ==============================

export interface ModalProps {
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
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  const isClickOutsideEnabled = role !== 'alert-modal';
  const modalRef = useClickOutside<HTMLDivElement>(
    isClickOutsideEnabled ? onClose : null
  );

  useBodyScrollLock(open);
  useModalAccessibility(open, onClose, modalRef);

  return (
    open && (
      <StyledModalContainer position={position}>
        <StyledModalContent
          ref={modalRef}
          role={role === 'modal' ? 'dialog' : 'alertdialog'}
          aria-modal="true"
          position={position}
          size={size}
          style={memoizedStyle}
        >
          {title && <Title id="modal-title">{title}</Title>}
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
  OpenTrigger: ModalOpenTrigger,
  CloseTrigger: ModalCloseTrigger,
  Container: ModalContainer,
  Title,
  CloseButton,
  PromptInput,
  ButtonGroup,
  Button,
  WideButton,
});

export default Modal;
