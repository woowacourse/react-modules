import { Modal } from '../..';
import { ModalAction, ModalContent } from '../../module/Modal.styles';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';

interface ConfirmModalProps extends ModalPropsType {
  message: string;
  onConfirm: () => void;
}

const ConfirmModal = ({
  isOpen,
  position,
  size,
  title,
  message,
  onClose,
  onConfirm,
  closeOnBackdropClick,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title={title}
      showCloseButton={false}
      size={size}
      onClose={onClose}
      closeOnBackdropClick={closeOnBackdropClick}
    >
      <ModalContent>{message}</ModalContent>
      <ModalAction>
        <Button text="취소" variant="cancel" onClick={onClose} />
        <Button text="확인" variant="confirm" onClick={onConfirm} />
      </ModalAction>
    </Modal>
  );
};

export default ConfirmModal;
