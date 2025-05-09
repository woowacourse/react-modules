import { Modal } from '../../lib';
import { Button, ButtonContainer } from '../common/Button/Button.styles';
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
  size = 'small',
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
        <Button>확인</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default AlertModal;
