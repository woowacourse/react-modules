import React from 'react';
import useModal from '../../../hooks/useModal';
import Input from '../../common/Input';
import Modal from '../../common/Modal';
import { BasicModal } from '../../types';

interface PromptModalProps extends BasicModal {
  label?: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onConfirmButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

function PromptModal({ ...rest }: PromptModalProps) {
  return (
    <Modal onCloseModal={rest.onModalClose}>
      <Modal.Header
        title={rest.title}
        isCloseIcon={rest.isCloseIcon}
        onCloseModal={rest.onModalClose}
      ></Modal.Header>
      <Modal.Content message={rest.message} $direction={rest.$contentDirection}>
        <Input label={rest.label} onChange={rest.onInputChange} />
      </Modal.Content>
      <Modal.Footer $direction={rest.$footerDirection} $align={rest.$algin}>
        <Modal.Button
          type="button"
          onButtonClick={rest.onCancelButtonClick}
          $size={rest.$buttonSize}
          $backgroundColor={rest.$buttonBackgroundColor}
          $color={rest.$buttonColor}
        >
          취소
        </Modal.Button>
        <Modal.Button
          type="button"
          onButtonClick={rest.onConfirmButtonClick}
          $size={rest.$buttonSize}
        >
          확인
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PromptModal;
