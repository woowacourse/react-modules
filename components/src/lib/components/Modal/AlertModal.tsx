import Modal from './Modal';
import ConfirmButton from '../common/ConfirmButton';
import { ModalProps } from '../../Modal.type';

function AlertModal({ children, title, position, isOpen, onClose, onAfterOpen, size }: ModalProps) {
  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} onAfterOpen={onAfterOpen} size={size} title={title}>
      <Modal.Header title={title} showCloseButton />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Actions>
        <ConfirmButton />
      </Modal.Actions>
    </Modal>
  );
}

export default AlertModal;
