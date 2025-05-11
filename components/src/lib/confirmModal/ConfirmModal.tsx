import Modal from '../baseModal/Modal';
import * as S from './ConfirmModal.styles';

function ConfirmModal({
  title,
  description,
  onClose,
  onConfirmButtonClick,
  position,
  size
}: {
  title: string;
  description: string;
  onClose: () => void;
  onConfirmButtonClick: () => void;
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
}) {
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
