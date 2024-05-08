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
  onSubmit: (value: string) => void;
  onCancel: () => void;
}

export default function PromptModal({
  isOpen,
  size,
  title,
  inputField,
  buttonsFlexDirection,
  onSubmit,
  onCancel,
  onClose,
}: PromptModalProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  const buttons: ButtonInterface[] = [
    {
      text: '취소',
      style: 'secondary',
      onClick: onCancel,
    },
    {
      text: '확인',
      style: 'primary',
      onClick: handleSubmit,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      size={size}
      title={title}
      onClose={onClose}
      buttons={buttons}
      buttonsFlexDirection={buttonsFlexDirection || 'row'}
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
