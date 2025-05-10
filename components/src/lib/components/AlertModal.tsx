import { AlertModalProps } from '../types/AlertModal.type';
import Modal from './Modal';
import Button from './Button';

const AlertModal = ({
  isOpen,
  onAfterOpen,
  onClose,
  onConfirm,
  position = 'center',
  title,
  content,
  confirmText = '확인',
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onClose={onClose} position={position}>
      <Modal.Header title={title} showCloseButton={false} />
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>
        <Button type="confirm" onConfirm={onConfirm} buttonText={confirmText} width="80px" />
      </Modal.Footer>
    </Modal>
  );
};
export default AlertModal;
