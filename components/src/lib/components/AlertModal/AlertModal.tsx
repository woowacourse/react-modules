import { Modal } from '../..';
import { ModalAction, ModalContent } from '../../module/Modal.styles';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';

interface AlertModalProps extends ModalPropsType {
  message: string;
}

const AlertModal = ({
  isOpen,
  position,
  size,
  title,
  message,
  onClose,
  onBackdropClick,
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title={title}
      showCloseButton={false}
      size={size}
      onClose={onClose}
      onBackdropClick={onBackdropClick}
    >
      <ModalContent>{message}</ModalContent>
      <ModalAction>
        <Button text={'확인'} variant={'confirm'} onClick={onClose} />
      </ModalAction>
    </Modal>
  );
};

export default AlertModal;
