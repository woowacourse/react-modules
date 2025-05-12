import { MouseEvent, useRef } from 'react';
import * as S from './Modal.styles';
import ModalPortal from './ModalPortal';
import useEscClick from './useEscKey';
import useScrollBlock from './useScrollBlock';
import { ModalContext, useModalContext } from './ModalContext';
import { ModalBackDropProps, ModalButtonProps, ModalCloseButtonProps, ModalContentProps, ModalMainProps, ModalTitleProps } from '../types';

function ModalMain({ onClose, children }: ModalMainProps) {
  useEscClick(onClose);
  useScrollBlock();

  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalPortal>{children}</ModalPortal>
    </ModalContext.Provider>
  );
}

function ModalBackDrop({ backgroundColor, zIndex, ...props }: ModalBackDropProps) {
  const { onClose } = useModalContext();
  const outsideRef = useRef<HTMLDivElement>(null);
  const handleBackClick = (e: MouseEvent<HTMLDivElement>) => {
    if (outsideRef.current === e.target) {
      onClose();
    }
  };
  return <S.BackDrop {...props} ref={outsideRef} backgroundColor={backgroundColor} zIndex={zIndex} onClick={handleBackClick} />;
}

function ModalContent({ children, position, zIndex, size, ...props }: ModalContentProps) {
  return (
    <S.ModalWrapper position={position ?? 'center'} zIndex={zIndex} size={size ?? 'medium'} {...props}>
      {children}
    </S.ModalWrapper>
  );
}

function ModalTitle({ children, ...props }: ModalTitleProps) {
  return <h2 {...props}>{children}</h2>;
}

function ModalCloseButton({ children, onClick, ...props }: ModalCloseButtonProps) {
  const { onClose } = useModalContext();

  return (
    <button onClick={onClick ?? onClose} {...props}>
      {children}
    </button>
  );
}

function ModalButton({ onClick, children, ...props }: ModalButtonProps) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const Modal = Object.assign(ModalMain, {
  BackDrop: ModalBackDrop,
  Content: ModalContent,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
  Button: ModalButton
});

export default Modal;
