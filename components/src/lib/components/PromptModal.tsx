import { useRef } from 'react';

import styled from '@emotion/styled';

import { Modal, ModalProps } from './common/Modal';

type PromptModalProps = {
  onConfirm: (value: string) => void;
  title: string;
} & Omit<ModalProps, 'children'>;

const PromptModal = ({ isOpen, onClose, onConfirm, title }: PromptModalProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleConfirm = () => {
    if (!ref.current) {
      return;
    }

    onConfirm(ref.current.value);
    ref.current.value = '';
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container>
        <Modal.Title title={title} />
        <StyledInput ref={ref} autoFocus />
        <Modal.ButtonWrapper>
          <Modal.CancelButton>취소</Modal.CancelButton>
          <Modal.ConfirmButton onClick={handleConfirm}>확인</Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default PromptModal;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
  outline: none;
`;
