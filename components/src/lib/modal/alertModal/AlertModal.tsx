import * as S from '../Modal.styles';
import { ModalProps } from '../../shared/types/modal';
import { ConfirmButton } from '../../shared/ui/Button.styles';

export default function AlertModal({ message, onClose }: ModalProps) {
  return (
    <>
      <S.ModalContentSection>{message}</S.ModalContentSection>
      <S.ModalButtonSection>
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </S.ModalButtonSection>
    </>
  );
}
