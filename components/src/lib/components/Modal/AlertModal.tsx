import Modal from './Modal';
import { ModalProps } from '../../Modal.type';
import Button from '../common/Button';

function AlertModal({ children, title, position, isOpen, onClose, onAfterOpen, size }: ModalProps) {
  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} onAfterOpen={onAfterOpen} size={size} title={title}>
      <Modal.Header title={title} showCloseButton />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Actions>
        <Button variant="primary" onClick={onClose}>
          확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default AlertModal;
