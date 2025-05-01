import { ModalProvider } from './contexts/ModalContext';
import Modal from './Modal';
import { ModalProps } from './types/modalTypes';

const ModalComponent = ({ ...props }: ModalProps) => {
  return (
    <ModalProvider>
      <Modal {...props}></Modal>
    </ModalProvider>
  );
};

export default ModalComponent;
