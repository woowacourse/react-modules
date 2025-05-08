import * as S from '../Modal.styles';
import { ModalProps } from '../../shared/types/modal';
import { ConfirmButton } from '../../shared/ui/Button.styles';
import { useEffect, useRef } from 'react';

export default function AlertModal({ message, onClose }: ModalProps) {
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    confirmBtnRef.current?.focus();
  }, []);
  return (
    <>
      <S.ModalContentSection>{message}</S.ModalContentSection>
      <S.ModalButtonSection>
        <ConfirmButton ref={confirmBtnRef} onClick={onClose}>
          확인
        </ConfirmButton>
      </S.ModalButtonSection>
    </>
  );
}
