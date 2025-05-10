import { Modal } from '../..';
import { ButtonContainer, ConfirmButton } from '../common/Button.styles';
import { Main, MainContainer } from './AlertModal.styles';

type AlertModalProps = {
  isOpen: boolean;
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  title: string;
  message: string;
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const AlertModal = ({
  isOpen,
  position,
  size,
  title,
  message,
  onClose,
  onBackdropClick,
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title={title}
      showCloseButton={false}
      size={size}
      onClose={onClose}
      onBackdropClick={onBackdropClick}
    >
      <MainContainer>
        <Main>{message}</Main>
      </MainContainer>
      <ButtonContainer>
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
};

export default AlertModal;
