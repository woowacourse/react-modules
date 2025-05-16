import Modal from './Modal';
import ConfirmButton from '../common/ConfirmButton';
import CancelButton from '../common/CancelButton';
import { ModalProps } from '../../Modal.type';

function ConfirmModal({ children, title, position, isOpen, onClose, onAfterOpen, size, onConfirm }: ModalProps) {
  return (
    <Modal isOpen={isOpen} position={position} onClose={onClose} onAfterOpen={onAfterOpen} size={size} title={title}>
      <Modal.Header title={title} showCloseButton />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Actions>
        <CancelButton />
        <ConfirmButton onClick={onConfirm} />
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmModal;
