import React from 'react';
import Modal from './Modal';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'center';
  size?: 'small' | 'medium' | 'large';
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'center',
  size = 'medium',
}) => {
  return (
    <Modal isOpen={isOpen} position={position} size={size} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer buttonPosition='right' buttonGap='10px'>
        <Modal.TextButton
          actionFn={onClose}
          buttonSize='50px'
          backgroundColor='#ffffff'
          fontColor='#333333'
        >
          취소
        </Modal.TextButton>
        <Modal.TextButton actionFn={onClose} buttonSize='50px'>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
