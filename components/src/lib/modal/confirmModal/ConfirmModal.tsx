import * as S from '../Modal.styles';
import { ModalProps } from '../../shared/types/modal';
import { CloseButton, ConfirmButton } from '../../shared/ui/Button.styles';
import { useEffect, useRef } from 'react';

export default function ConfirmModal({ message = 'no message', onClose, onConfirm }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const messageId = 'confirm-modal-message';

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  const handleConfirm = () => {
    if (!onConfirm) {
      console.error('onConfirm function is not provided');
      return;
    }
    onConfirm();
    onClose();
  };
  return (
    <>
      <S.ModalContentSection id={messageId} aria-describedby={messageId}>
        {message}
      </S.ModalContentSection>
      <S.ModalButtonSection>
        <CloseButton ref={closeBtnRef} onClick={onClose}>
          취소
        </CloseButton>
        <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
      </S.ModalButtonSection>
    </>
  );
}
