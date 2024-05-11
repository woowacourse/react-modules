import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface AlertModalProps extends ModalProps {
  description: string;
  confirmButtonText?: string;
  onConfirm: () => void;
}

export default function AlertModal({
  isOpen,
  size,
  title,
  description,
  confirmButtonText,
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection,
  onConfirm,
  onClose,
}: AlertModalProps) {
  const confirmButton: ButtonInterface = {
    text: confirmButtonText || '확인',
    style: 'primary',
    onClick: onConfirm,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={[confirmButton]}
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
