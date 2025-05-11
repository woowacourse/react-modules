import { Modal, ModalProvider } from './lib';
import ModalOpenButton from './ModalOpenButton';
import { ReactNode } from 'react';

interface ModalExampleProps {
  type: string;
  modalPosition: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
  modalType?: 'default' | 'alert' | 'confirm' | 'prompt';
  closeType: 'top' | 'bottom' | 'none';
  titleText: string;
  onClose?: () => void;
  children: ReactNode;
}

function ModalExample({
  type,
  modalPosition,
  modalSize,
  modalType = 'default',
  closeType,
  titleText,
  onClose,
  children,
}: ModalExampleProps) {
  return (
    <ModalProvider
      modalPosition={modalPosition}
      modalSize={modalSize}
      modalType={modalType}
      closeType={closeType}
      titleText={titleText}
      onClose={onClose}
    >
      <ModalOpenButton type={type} />
      <Modal>{children}</Modal>
    </ModalProvider>
  );
}

export default ModalExample;
