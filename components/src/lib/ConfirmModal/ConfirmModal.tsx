import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface ConfirmModalProps extends ModalProps {
  description: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  size,
  title,
  description,
  confirmButtonText,
  cancelButtonText,
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection,
  onConfirm,
  onCancel,
  onClose,
}: ConfirmModalProps) {
  const confirmButton: ButtonInterface = {
    text: confirmButtonText || '확인',
    style: 'primary',
    onClick: onConfirm,
  };

  const cancelButton: ButtonInterface = {
    text: cancelButtonText || '취소',
    style: 'secondary',
    onClick: onCancel,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={[confirmButton, cancelButton]}
      buttonsFlexDirection={buttonsFlexDirection || 'row'}
      position={position}
      hasCloseButton={hasCloseButton}
      isClosableOnClickBackdrop={isClosableOnClickBackdrop}
      zIndex={zIndex}
      backdropOpacity={backdropOpacity}
    >
      <p>{description}</p>
    </Modal>
  );
}
