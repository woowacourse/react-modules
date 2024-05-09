import React from 'react';
import Modal from './Modal';

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'top' | 'bottom' | 'center';
  size?: 'small' | 'medium' | 'large';
  title: string;
  message: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  position = 'center',
  size = 'small',
}) => {
  return (
    <Modal isOpen={isOpen} position={position} size={size} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <span>{message}</span>
      </Modal.Content>
      <Modal.Footer buttonPosition='right'>
        <Modal.TextButton actionFn={onClose} buttonSize='50px'>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
