import Modal from '../baseModal/Modal';
import * as S from './AlertModal.styles';

function AlertModal({
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
          <S.CustomButtonConfirm onClick={onConfirmButtonClick}>{buttonText}</S.CustomButtonConfirm>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default AlertModal;
