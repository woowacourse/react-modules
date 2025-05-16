import { PropsWithChildren, useEffect } from 'react';
import { ModalProps } from '../../Modal.type';
import ModalBackdrop from '../common/ModalBackdrop';
import ModalHeader from '../common/ModalHeader';
import useModalKeyboard from '../../hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from '../../ModalContext';
import ConfirmButton from '../common/ConfirmButton';
import CancelButton from '../common/CancelButton';
import { ModalFrame, ButtonBar, BodyStyles } from '../common/cssStyle';
import PromptModal from './PromptModal';
import ConfirmModal from './ConfirmModal';
import AlertModal from './AlertModal';

const Modal = ({
  children,
  position,
  isOpen,
  onClose,
  onAfterOpen,
  size = 'medium',
  showDefaultCancelButton,
  showDefaultConfirmButton,
}: ModalProps) => {
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
          {(showDefaultCancelButton || showDefaultConfirmButton) && (
            <div className={ButtonBar}>
              {showDefaultCancelButton && <CancelButton />}
              {showDefaultConfirmButton && <ConfirmButton />}
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
  return <section className={BodyStyles}>{children}</section>;
};

Modal.Actions = function Actions({ children }: PropsWithChildren) {
  return <section className={ButtonBar}>{children}</section>;
};

Modal.Prompt = PromptModal;
Modal.Confirm = ConfirmModal;
Modal.Alert = AlertModal;

export default Modal;
