import Modal from '../baseModal/Modal';
import * as S from './AlertModal.styles';

function AlertModal({
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
      <S.CustomContent position={position ?? 'center'} size={size}>
        <S.CustomTitle>{title}</S.CustomTitle>
        {description && <S.CustomDescription>{description}</S.CustomDescription>}
        <S.CustomButtonWrapper>
          <S.CustomButtonConfirm onClick={onConfirmButtonClick}>확인</S.CustomButtonConfirm>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default AlertModal;
