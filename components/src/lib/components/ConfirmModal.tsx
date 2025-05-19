import Modal from './Modal';
import Button from './Button';
import { ConfirmModalProps } from '../types/ConfirmModal.type';

const ConfirmModal = ({
  isOpen,
  onAfterOpen,
  onClose,
  onConfirm,
  position = 'center',
  title,
  content,
  confirmText = '확인',
  cancelText = '취소',
  size,
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onClose={onClose} position={position} size={size}>
      <Modal.Header title={title} showCloseButton={false} />
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>
        <Button buttonType="cancel" onClick={onClose} buttonText={cancelText} width="80px" />
        <Button buttonType="confirm" onClick={onConfirm} buttonText={confirmText} width="80px" />
      </Modal.Footer>
    </Modal>
  );
};
export default ConfirmModal;
