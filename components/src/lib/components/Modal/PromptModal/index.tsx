import React from 'react';
import Input from '../../common/Input';
import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface PromptModalProps extends BasicModal {
  label?: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function PromptModal({
  title,
  isCloseIcon,
  message,
  label,
  onModalClose,
  onInputChange,
  onCancelButtonClick,
  onConfirmButtonClick,
  $contentDirection,
  $footerDirection,
  $align,
  $buttonSize,
  $buttonBackgroundColor,
  $buttonColor,
}: PromptModalProps) {
  return (
    <Modal onCloseModal={onModalClose}>
      <Modal.Header
        title={title}
        isCloseIcon={isCloseIcon}
        onCloseModal={onModalClose}
      ></Modal.Header>
      <Modal.Content message={message} $direction={$contentDirection}>
        <Input label={label} onChange={onInputChange} />
      </Modal.Content>
      <Modal.Footer $direction={$footerDirection} $align={$align}>
        <Modal.Button
          type="button"
          onClick={onCancelButtonClick}
          $size={$buttonSize}
          $backgroundColor={$buttonBackgroundColor}
          $color={$buttonColor}
        >
          취소
        </Modal.Button>
        <Modal.Button
          type="button"
          onClick={onConfirmButtonClick}
          $size={$buttonSize}
        >
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PromptModal;
