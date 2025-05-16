import * as S from './PromptModal.styles';
import Modal from '../baseModal/Modal';
import { PromptModalProps } from '../types';
import { useRef } from 'react';

function PromptModal({ title, onClose, onPromptButtonClick, position, size, placeholder }: PromptModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handlePromptButtonSubmit() {
    const inputValue = inputRef.current?.value ?? '';

    onPromptButtonClick(inputValue);
  }

  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position} size={size}>
        <S.CustomTitle>{title}</S.CustomTitle>
        <S.CustomInput type="text" placeholder={placeholder} ref={inputRef} />
        <S.CustomButtonWrapper>
          <S.CustomCancelButton>취소</S.CustomCancelButton>
          <S.CustomConfirmButton onClick={handlePromptButtonSubmit}>확인</S.CustomConfirmButton>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default PromptModal;
