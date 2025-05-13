import * as S from '../Modal.styles';
import { ModalProps } from '../../shared/types/modal';
import { ConfirmButton } from '../../shared/ui/Button.styles';
import { useEffect, useRef } from 'react';

export default function AlertModal({ message = 'no message', onClose }: ModalProps) {
  const confirmBtnRef = useRef<HTMLButtonElement>(null);
  const messageId = 'alert-modal-message';

  useEffect(() => {
    confirmBtnRef.current?.focus();
  }, []);

  return (
    <>
      <S.ModalContentSection id={messageId} aria-describedby={messageId}>
        {message}
      </S.ModalContentSection>
      <S.ModalButtonSection>
        <ConfirmButton ref={confirmBtnRef} onClick={onClose}>
          확인
        </ConfirmButton>
      </S.ModalButtonSection>
    </>
  );
}
