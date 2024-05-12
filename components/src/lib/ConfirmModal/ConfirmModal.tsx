import React from 'react';
import Modal, { ModalProps } from '../Modal/Modal';

import styles from './ConfirmModal.module.css';

interface ConfirmModalProps extends ModalProps {
  title: string;
  caption: string;
  confirmButtonLabel: string;
  cancelButtonLabel: string;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onToggle,
  onConfirm,
  isOpen,
  position,
  size,
  title,
  caption,
  confirmButtonLabel,
  cancelButtonLabel,
  ...rest
}) => {
  return (
    <Modal
      className={styles.confirmModal}
      isOpen={isOpen}
      onToggle={onToggle}
      position={position}
      size={size}
      {...rest}
    >
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent>
        <Modal.ModalCaption caption={caption}></Modal.ModalCaption>
      </Modal.ModalContent>
      <Modal.ModalFooter className={styles.confirmModalFooter}>
        <Modal.ModalButton variant="secondary" onClick={onToggle}>
          {cancelButtonLabel}
        </Modal.ModalButton>
        <Modal.ModalButton variant="primary" onClick={onConfirm}>
          {confirmButtonLabel}
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
