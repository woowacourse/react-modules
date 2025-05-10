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
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onClose={onClose} position={position}>
      <Modal.Header title={title} showCloseButton={false} />
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>
        <Button type="cancel" onClick={onClose} buttonText={cancelText} width="80px" />
        <Button type="confirm" onClick={onConfirm} buttonText={confirmText} width="80px" />
      </Modal.Footer>
    </Modal>
  );
};
export default ConfirmModal;
