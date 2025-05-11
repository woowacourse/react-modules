import { Children, isValidElement, PropsWithChildren, useEffect } from 'react';
import { css } from '@emotion/css';
import { ModalProps, ModalSize, Position } from '../../Modal.type';
import ModalBackdrop from '../common/ModalBackdrop';
import ModalHeader from '../common/ModalHeader';
import useModalKeyboard from '../../hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from '../../ModalContext';
import ConfirmButton from '../common/ConfirmButton';
import CancelButton from '../common/CancelButton';

const Modal = ({ children, position, isOpen, onClose, onAfterOpen, type, size }: ModalProps) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (onAfterOpen) onAfterOpen();
  }, [onAfterOpen]);

  useModalKeyboard(onClose);

  return (
    <ModalProvider onClose={onClose}>
      <ModalBackdrop>
        <div className={ModalFrame(position, size)} data-testid="modal">
          {children}
          {Children.toArray(children).every((child) => isValidElement(child) && child.type !== Modal.Actions) && (
            <div className={ButtonBar}>
              {(type === 'confirm' || type === 'prompt') && <CancelButton />}
              <ConfirmButton />
            </div>
          )}
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

const ModalSizeStyle = {
  small: css`
    width: 320px;
  `,
  medium: css`
    width: 480px;
  `,
  large: css`
    width: 600px;
  `,
};

const modalPositionStyle = {
  center: css`
    border-radius: 8px;
  `,
  bottom: css`
    width: 100dvw;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  `,
};

const ModalFrame = (position: Position, size: ModalSize) => css`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${ModalSizeStyle[size]}
  ${modalPositionStyle[position]}
`;

const ButtonBar = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
