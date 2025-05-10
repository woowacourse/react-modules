import * as S from '../Modal.styles';
import { ModalProps } from '../../shared/types/modal';
import { CloseButton, ConfirmButton } from '../../shared/ui/Button.styles';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

export default function PromptModal({ onClose, onSubmit }: ModalProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messageId = 'prompt-modal-message';

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubmit) {
      console.error('onSubmit function is not provided');
      return;
    }

    onSubmit(input);
    setInput('');
    onClose();
  };

  return (
    <PromptModalForm onSubmit={handleSubmit}>
      <PromptModalInput
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='입력해주세요.'
        required
      />
      <S.ModalButtonSection id={messageId} aria-describedby={messageId}>
        <CloseButton type='button' onClick={onClose}>
          취소
        </CloseButton>
        <ConfirmButton type='submit'>확인</ConfirmButton>
      </S.ModalButtonSection>
    </PromptModalForm>
  );
}

export const PromptModalInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding: 8px;
  border: 1px solid black;
  :focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;

const PromptModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
