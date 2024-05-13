import React from 'react';
import { Modal } from '..';

interface AlertModalProps {
  isOpen: boolean;
  onCloseIcon?: () => void;
  onConfirmButton?: () => void;
  onDimmedClick?: () => void;
  position?: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
  content?: React.ReactNode;
  isAnimation?: boolean;
  animationDuration?: number;
  title?: string;
  showCloseIcon?: boolean;
  buttonLabel?: string;
}

const AlertModal = ({
  isOpen,
  onCloseIcon,
  onConfirmButton,
  onDimmedClick,
  position = 'center',
  modalSize,
  content,
  isAnimation = false,
  animationDuration,
  title,
  showCloseIcon = true,
  buttonLabel = '확인',
}: AlertModalProps) => {
  const handleClickDimmed = () => {
    onDimmedClick && onDimmedClick();
  };

  const handleCloseIcon = () => {
    onCloseIcon && onCloseIcon();
  };

  const handleConfirmButton = () => {
    onConfirmButton && onConfirmButton();
  };

  return (
    <Modal
      isOpen={isOpen}
      position={position}
      size={modalSize}
      isAnimation={isAnimation}
      animationDuration={animationDuration}
    >
      <Modal.Dimmed onDimmedClick={handleClickDimmed} />
      <Modal.Header>
        <Modal.Title title={title} />
        <Modal.CloseIcon onClose={handleCloseIcon} showCloseIcon={showCloseIcon} />
      </Modal.Header>
      {content && <Modal.Content>{content}</Modal.Content>}
      <Modal.Footer position="row" justifyContent="flex-end">
        <Modal.ConfirmButton size="small" label={buttonLabel} onConfirm={handleConfirmButton} />
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
