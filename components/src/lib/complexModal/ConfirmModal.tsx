import React from 'react';
import { Modal } from '..';

interface ConfirmModalProps {
  isOpen: boolean;
  onCloseIcon?: () => void;
  onCloseButton?: () => void;
  onConfirmButton?: () => void;
  onDimmedClick?: () => void;
  position?: 'center' | 'bottom';
  modalSize?: 'small' | 'medium' | 'large';
  content?: React.ReactNode;
  isAnimation?: boolean;
  animationDuration?: number;
  title?: string;
  showCloseIcon?: boolean;
  closeButtonLabel?: string;
  confirmButtonLabel?: string;
}

const ConfirmModal = ({
  isOpen,
  onCloseIcon,
  onCloseButton,
  onConfirmButton,
  onDimmedClick,
  position = 'center',
  modalSize,
  content,
  isAnimation = false,
  animationDuration,
  title,
  showCloseIcon = true,
  closeButtonLabel = '취소',
  confirmButtonLabel = '확인',
}: ConfirmModalProps) => {
  const handleClickDimmed = () => {
    onDimmedClick && onDimmedClick();
  };

  const handleCloseIcon = () => {
    onCloseIcon && onCloseIcon();
  };

  const handleConfirmButton = () => {
    onConfirmButton && onConfirmButton();
  };

  const handleCloseButton = () => {
    onCloseButton && onCloseButton();
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
        <Modal.CloseButton size="small" label={closeButtonLabel} onClose={handleCloseButton} />
        <Modal.ConfirmButton
          size="small"
          label={confirmButtonLabel}
          onConfirm={handleConfirmButton}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
