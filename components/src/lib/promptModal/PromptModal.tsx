import Modal from '../baseModal/Modal';
import * as S from './PromptModal.styles';

function PromptModal({
  title,
  onClose,
  onPromptButtonClick,
  position,
  size
}: {
  title: string;
  onClose: () => void;
  onPromptButtonClick: () => void;
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
}) {
  return (
    <Modal onClose={onClose}>
      <Modal.BackDrop />
      <S.CustomContent position={position} size={size}>
        <S.CustomTitle>{title}</S.CustomTitle>
        <S.CustomInput type="text" placeholder="쿠폰 번호를 입력해 주세요." />
        <S.CustomButtonWrapper>
          <S.CustomCancelButton>취소</S.CustomCancelButton>
          <S.CustomConfirmButton onClick={onPromptButtonClick}>확인</S.CustomConfirmButton>
        </S.CustomButtonWrapper>
      </S.CustomContent>
    </Modal>
  );
}

export default PromptModal;
