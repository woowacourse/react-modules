import * as S from './AlertModal.styles';
import Modal from '../baseModal/Modal';
import { AlertModalProps } from '../types';
import { useHandleTabKey } from '../baseModal/useHandleTabKey';

function AlertModal({ title, description, onClose, onConfirmButtonClick, position, size }: AlertModalProps) {
  const containerRef = useHandleTabKey();
  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position} size={size} ref={containerRef}>
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
