import React from 'react';
import Modal, { ModalProps } from './Modal';

export interface ConfirmModalProps extends ModalProps {
  title: string;
  children: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonBackgroundColor?: string;
  secondaryButtonBackgroundColor?: string;
  primaryButtonFontColor?: string;
  secondaryButtonFontColor?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'center',
  size = 'medium',
  primaryButtonText = '확인',
  secondaryButtonText = '취소',
  primaryButtonBackgroundColor = '#333333',
  secondaryButtonBackgroundColor = '#ffffff',
  primaryButtonFontColor = '#ffffff',
  secondaryButtonFontColor = '#333333',
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
          buttonWidth='80px'
          buttonHeight='36px'
          backgroundColor={secondaryButtonBackgroundColor}
          fontColor={secondaryButtonFontColor}
        >
          {secondaryButtonText}
        </Modal.TextButton>
        <Modal.TextButton
          actionFn={onClose}
          buttonWidth='80px'
          buttonHeight='36px'
          backgroundColor={primaryButtonBackgroundColor}
          fontColor={primaryButtonFontColor}
        >
          {primaryButtonText}
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
