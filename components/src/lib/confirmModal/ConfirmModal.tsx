import * as S from './ConfirmModal.styles';
import Modal from '../baseModal/Modal';
import { ConfirmModalProps } from '../types';

function ConfirmModal({ title, description, onClose, onConfirmButtonClick, position, size }: ConfirmModalProps) {
  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position} size={size}>
        <S.CustomTitle>{title}</S.CustomTitle>
        {description && <S.CustomDescription>{description}</S.CustomDescription>}
        <S.CustomButtonWrapper>
          <S.CustomCancelButton>취소</S.CustomCancelButton>
          <S.CustomConfirmButton onClick={onConfirmButtonClick}>확인</S.CustomConfirmButton>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default ConfirmModal;
