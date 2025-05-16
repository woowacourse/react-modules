import { PropsWithChildren, useEffect } from 'react';
import { ModalProps } from '../../Modal.type';
import ModalBackdrop from '../common/ModalBackdrop';
import ModalHeader from '../common/ModalHeader';
import useModalKeyboard from '../../hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from '../../ModalContext';
import { ModalFrame, ButtonBar, BodyStyles } from '../common/cssStyle';
import PromptModal from './PromptModal';
import ConfirmModal from './ConfirmModal';
import AlertModal from './AlertModal';
import Button from '../common/Button';

const Modal = ({
  children,
  position,
  isOpen,
  onClose,
  onAfterOpen,
  onConfirm,
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
        <div
          className={ModalFrame(position, size)}
          data-testid="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-body"
        >
          {children}
          {(showDefaultCancelButton || showDefaultConfirmButton) && (
            <div className={ButtonBar}>
              {showDefaultCancelButton && (
                <Button variant="default" onClick={onClose}>
                  취소
                </Button>
              )}
              {showDefaultConfirmButton && (
                <Button variant="primary" onClick={onConfirm}>
                  확인
                </Button>
              )}
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
  return <section className={BodyStyles} id="modal-body">{children}</section>;
};

Modal.Actions = function Actions({ children }: PropsWithChildren) {
  return <section className={ButtonBar}>{children}</section>;
};

Modal.Prompt = PromptModal;
Modal.Confirm = ConfirmModal;
Modal.Alert = AlertModal;

export default Modal;
