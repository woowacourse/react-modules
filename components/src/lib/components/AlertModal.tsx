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
  size,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onClose={onClose} position={position} size={size}>
      <Modal.Header title={title} showCloseButton={false} />
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>
        <Button buttonType="confirm" onClick={onConfirm} buttonText={confirmText} width="80px" />
      </Modal.Footer>
    </Modal>
  );
};
export default AlertModal;
