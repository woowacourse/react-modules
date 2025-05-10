import { Modal } from '../../lib';
import { ButtonContainer, ConfirmButton } from '../common/Button.styles';
import { Main, MainContainer } from './AlertModal.styles';

type AlertModalProps = {
  isOpen: boolean;
  position: 'center' | 'bottom';
  size: 'small' | 'medium' | 'large';
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const AlertModal = ({
  isOpen,
  position,
  size,
  onClose,
  onBackdropClick,
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title="아이디를 입력해주세요."
      showCloseButton={false}
      size={size}
      onClose={onClose}
      onBackdropClick={onBackdropClick}
    >
      <MainContainer>
        <Main>아이디는 필수로 입력해야 합니다.</Main>
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
};

export default AlertModal;
