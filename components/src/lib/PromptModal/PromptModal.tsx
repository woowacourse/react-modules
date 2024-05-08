import { useState } from 'react';

import Modal, { ModalProps } from '../Modal/Modal';
import { ButtonInterface } from '../types/ModalTypes';

import * as Styled from './PromptModal.style';

export interface PromptModalProps extends ModalProps {
  inputField: {
    name: string;
    label?: string;
    placeholder?: string;
    onChange?: () => void;
  };
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
}

export default function PromptModal({
  isOpen,
  size,
  title,
  inputField,
  submitButtonText,
  cancelButtonText,
  position = 'center',
  hasCloseButton = true,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
  buttonsFlexDirection,
  onSubmit,
  onCancel,
  onClose,
}: PromptModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleClickSubmitButton = () => {
    onSubmit(inputValue);
  };

  const submitButton: ButtonInterface = {
    text: submitButtonText || '확인',
    style: 'primary',
    onClick: handleClickSubmitButton,
  };

  const cancelButton: ButtonInterface = {
    text: cancelButtonText || '취소',
    style: 'secondary',
    onClick: onCancel,
  };

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={[submitButton, cancelButton]}
      buttonsFlexDirection={buttonsFlexDirection || 'row'}
      position={position}
      hasCloseButton={hasCloseButton}
      isClosableOnClickBackdrop={isClosableOnClickBackdrop}
      zIndex={zIndex}
      backdropOpacity={backdropOpacity}
    >
      {inputField.label && <label htmlFor={inputField.name}>{inputField.label}</label>}
      <Styled.Input
        name={inputField.name}
        placeholder={inputField.placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
      />
    </Modal>
  );
}
