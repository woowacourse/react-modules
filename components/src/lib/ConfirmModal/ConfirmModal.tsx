import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface ConfirmModalProps extends ModalProps {
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  size,
  title,
  description,
  buttonsFlexDirection,
  onConfirm,
  onCancel,
  onClose,
}: ConfirmModalProps) {
  const buttons: ButtonInterface[] = [
    {
      text: '취소',
      style: 'secondary',
      onClick: onCancel,
    },
    {
      text: '확인',
      style: 'primary',
      onClick: onConfirm,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={buttons}
      buttonsFlexDirection={buttonsFlexDirection || 'row'}
    >
      <p>{description}</p>
    </Modal>
  );
}
