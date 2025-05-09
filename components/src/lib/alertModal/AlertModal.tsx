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
      <S.CustomContent position={position ?? 'center'} size={size ?? 'small'}>
        <S.CustomTitle>{title}</S.CustomTitle>
        <S.CustomCloseButton>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
              fill="black"
            />
          </svg>
        </S.CustomCloseButton>
        {description && <S.CustomDescription>{description}</S.CustomDescription>}
        <S.CustomButtonWrapper>
          <S.CustomButtonConfirm onClick={onConfirmButtonClick}>{buttonText}</S.CustomButtonConfirm>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default AlertModal;
