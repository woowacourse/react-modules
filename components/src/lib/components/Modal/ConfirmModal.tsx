import Modal from './Modal';
import { ModalProps } from '../../Modal.type';
import Button from '../common/Button';

function ConfirmModal({ children, title, position, isOpen, onClose, onAfterOpen, size, onConfirm }: ModalProps) {
  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} onAfterOpen={onAfterOpen} size={size} title={title}>
      <Modal.Header title={title} showCloseButton />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Actions>
        <Button variant="default" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          확인
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmModal;
