import useScrollBlock from '../hooks/useScrollBlock';
import { ModalContext, useModalContext } from '../ModalContext';
import { BackDrop, ModalWrapper, StyledFooter } from './Modal.styles';
import { useClickAway } from '../hooks/useClickAway';
import { ModalBackDropProps, ModalCloseButtonProps, ModalContentProps, ModalFooterProps, ModalMainProps, ModalTitleProps } from '../type/Modal.types';
import useEscKeydown from '../hooks/useEscKeydown';
import ModalPortal from '../ModalPortal';

function ModalMain({ isOpen, size, onClose, position, children }: ModalMainProps) {
  useEscKeydown(onClose);
  useScrollBlock(isOpen);

  if (!isOpen) return null;
  return (
    <ModalPortal>
      <ModalContext.Provider value={{ onClose, position, size }}>{children}</ModalContext.Provider>
    </ModalPortal>
  );
}

function ModalBackDrop({ ...props }: ModalBackDropProps) {
  return <BackDrop {...props} />;
}

function ModalContent({ children, ...props }: ModalContentProps) {
  const { onClose, position, size } = useModalContext();
  const outsideRef = useClickAway<HTMLDivElement>(onClose);

  return (
    <ModalWrapper size={size} position={position} ref={outsideRef} {...props}>
      {children}
    </ModalWrapper>
  );
}

function ModalTitle({ children, ...props }: ModalTitleProps) {
  return <p {...props}>{children}</p>;
}

function ModalCloseButton({ children, ...props }: ModalCloseButtonProps) {
  const { onClose } = useModalContext();
  return (
    <button onClick={onClose} {...props}>
      {children}
    </button>
  );
}

function ModalFooter({ align = 'right', children, ...props }: ModalFooterProps) {
  return (
    <StyledFooter align={align} {...props}>
      {children}
    </StyledFooter>
  );
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Footer: ModalFooter
});

export default Modal;
