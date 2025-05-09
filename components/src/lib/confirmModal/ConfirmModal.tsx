import Modal from '../baseModal/Modal';
import * as S from './ConfirmModal.styles';

function ConfirmModal({
  title,
  description,
  onClose,
  onConfirmButtonClick,
  position,
  buttonText,
  size
}: {
  title: string;
  description: string;
  onClose: () => void;
  onConfirmButtonClick: () => void;
  position?: 'center' | 'bottom';
  buttonText: string;
  size?: 'small' | 'medium' | 'large';
}) {
  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position ?? 'center'} size={size}>
        <S.CustomTitle>{title}</S.CustomTitle>
        {description && <S.CustomDescription>{description}</S.CustomDescription>}
        <S.CustomButtonWrapper>
          <S.CustomCancelButton>취소</S.CustomCancelButton>
          <S.CustomConfirmButton onClick={onConfirmButtonClick}>{buttonText}</S.CustomConfirmButton>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default ConfirmModal;
