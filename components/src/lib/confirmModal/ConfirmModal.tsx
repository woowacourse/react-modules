import * as S from './ConfirmModal.styles';
import Modal from '../baseModal/Modal';
import { ConfirmModalProps } from '../types';
import { useHandleTabKey } from '../baseModal/useHandleTabKey';

function ConfirmModal({ title, description, onClose, onConfirmButtonClick, position, size }: ConfirmModalProps) {
  const containerRef = useHandleTabKey();

  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position} size={size} ref={containerRef}>
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
