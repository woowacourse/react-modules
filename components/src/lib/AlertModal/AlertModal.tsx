import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

export interface AlertModalProps extends ModalProps {
  description: string;
  onConfirm: () => void;
}

export default function AlertModal({
  isOpen,
  size,
  title,
  description,
  buttonsFlexDirection,
  onConfirm,
  onClose,
}: AlertModalProps) {
  const buttons: ButtonInterface[] = [
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
