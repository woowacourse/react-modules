import React from 'react';
import Modal, { ModalProps } from './Modal';

export interface AlertModalProps extends ModalProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonFontColor?: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  position = 'center',
  size = 'small',
  buttonText = '확인',
  buttonBackgroundColor = '#333333',
  buttonFontColor = '#ffffff',
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
        <Modal.TextButton
          actionFn={onClose}
          buttonWidth='80px'
          buttonHeight='36px'
          backgroundColor={buttonBackgroundColor}
          fontColor={buttonFontColor}
        >
          {buttonText}
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
