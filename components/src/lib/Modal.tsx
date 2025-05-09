import { PropsWithChildren, useEffect } from 'react';
import { css } from '@emotion/css';
import { ModalProps, Position } from './Modal.type';
import ModalBackdrop from './components/ModalBackdrop';
import ModalHeader from './components/ModalHeader';
import useModalKeyboard from './hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from './ModalContext';

const Modal = ({ children, position, isOpen, onClose, onAfterOpen }: ModalProps) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (onAfterOpen) onAfterOpen();
  }, [onAfterOpen]);

  useModalKeyboard(onClose);

  return (
    <ModalProvider onClose={onClose}>
      <ModalBackdrop>
        <div className={ModalFrame(position)} data-testid="modal">
          {children}
        </div>
      </ModalBackdrop>
    </ModalProvider>
  );
};

Modal.Header = function Header({ title, showCloseButton = false }: { title: string; showCloseButton?: boolean }) {
  const context = useModalContext();
  if (!context) throw new Error('Modal.Header must be used within a Modal');
  return <ModalHeader title={title} showCloseButton={showCloseButton} onClose={context.onClose} />;
};

Modal.Body = function Body({ children }: PropsWithChildren) {
  return <section>{children}</section>;
};

Modal.Actions = function Actions({ children }: PropsWithChildren) {
  return <>{children}</>;
};

export default Modal;

const modalPositionStyle = {
  center: css`
    width: 100%;
    min-width: 300px;
    max-width: 80dvw;
    border-radius: 8px;
  `,
  bottom: css`
    width: 100dvw;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  `,
};

const ModalFrame = (position: Position) => css`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${modalPositionStyle[position]}
`;

const ButtonBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
