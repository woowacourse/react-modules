import { useRef } from 'react';

import styled from '@emotion/styled';

import { Modal, ModalProps } from './common/Modal';

type PromptModalProps = {
  onConfirm: (value: string) => void;
  title: string;
  size?: 'small' | 'medium' | 'large';
  $zIndex?: number;
} & Omit<ModalProps, 'children'>;

const PromptModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  size = 'medium',
  $zIndex = 1000,
}: PromptModalProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ref.current) {
      return;
    }

    onConfirm(ref.current.value);
    ref.current.value = '';
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false} $zIndex={$zIndex}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container size={size}>
        <Modal.Title title={title} />
        <StyledForm onSubmit={handleConfirm}>
          <StyledLabel htmlFor="prompt-input" />
          <StyledInput ref={ref} autoFocus={true} id="prompt-input" />
          <Modal.ButtonWrapper>
            <Modal.CancelButton onClose={onClose}>취소</Modal.CancelButton>
            <Modal.ConfirmButton type="submit">확인</Modal.ConfirmButton>
          </Modal.ButtonWrapper>
        </StyledForm>
      </Modal.Container>
    </Modal>
  );
};

export default PromptModal;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
`;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
  outline: none;
`;
