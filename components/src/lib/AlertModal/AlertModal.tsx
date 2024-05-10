import React from 'react';
import Modal, { ModalProps } from '../Modal/Modal';

import styles from './AlertModal.module.css';

interface AlertModalProps extends ModalProps {
  title: string;
  caption: string;
}

const AlertModal: React.FC<AlertModalProps> = ({ onToggle, isOpen, position, size, title, caption, ...rest }) => {
  return (
    <Modal className={styles.alertModal} isOpen={isOpen} onToggle={onToggle} position={position} size={size} {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent>
        <Modal.ModalCaption caption={caption}></Modal.ModalCaption>
      </Modal.ModalContent>
      <Modal.ModalFooter className={styles.alertModalFooter}>
        <Modal.ModalButton variant="primary" onClick={onToggle}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default AlertModal;
