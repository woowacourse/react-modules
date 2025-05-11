import { PropsWithChildren, useEffect } from 'react';
import { ModalProps } from '../../Modal.type';
import ModalBackdrop from '../common/ModalBackdrop';
import ModalHeader from '../common/ModalHeader';
import useModalKeyboard from '../../hooks/useModalKeyboard';
import { ModalProvider, useModalContext } from '../../ModalContext';
import ConfirmButton from '../common/ConfirmButton';
import { ButtonBar, ModalFrame } from '../common/cssStyle';

const AlertModal = ({ children, position, isOpen, onClose, onAfterOpen, size }: ModalProps) => {
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
          <div className={ButtonBar}>
            <ConfirmButton />
          </div>
        </div>
      </ModalBackdrop>
    </ModalProvider>
  );
};

AlertModal.Header = function Header({ title, showCloseButton = false }: { title: string; showCloseButton?: boolean }) {
  const context = useModalContext();
  if (!context) throw new Error('Modal.Header must be used within a Modal');
  return <ModalHeader title={title} showCloseButton={showCloseButton} onClose={context.onClose} />;
};

AlertModal.Body = function Body({ children }: PropsWithChildren) {
  return <section>{children}</section>;
};

export default AlertModal;
