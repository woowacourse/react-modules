import { MouseEvent, ReactNode, useRef } from 'react';
import * as S from './Modal.styles';
import { ComponentProps } from 'react';
import ModalPortal from './ModalPortal';

function ModalMain({ children }: { children: ReactNode }) {
  return <ModalPortal>{children}</ModalPortal>;
}

function ModalBackDrop({ onClose, ...props }: { onClose: () => void } & ComponentProps<'div'>) {
  const outsideRef = useRef<HTMLDivElement>(null);
  const handleBackClick = (e: MouseEvent<HTMLDivElement>) => {
    if (outsideRef.current === e.target) {
      onClose();
    }
  };
  return <S.BackDrop {...props} ref={outsideRef} onClick={handleBackClick} />;
}

function ModalContent({
  children,
  position,
  ...props
}: {
  children: ReactNode;
  position: 'center' | 'bottom';
} & ComponentProps<'div'>) {
  return (
    <S.ModalWrapper position={position} {...props}>
      {children}
    </S.ModalWrapper>
  );
}

function ModalTitle({ children, ...props }: { children: ReactNode } & ComponentProps<'h2'>) {
  return <h2 {...props}>{children}</h2>;
}

function ModalCloseButton({ onClick, children, ...props }: { onClick: () => void; children: ReactNode } & ComponentProps<'button'>) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

function ModalButton({ onClick, children, ...props }: { onClick: () => void; children: ReactNode } & ComponentProps<'button'>) {
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
