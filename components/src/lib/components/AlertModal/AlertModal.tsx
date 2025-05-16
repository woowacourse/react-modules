import { Modal } from '../..';
import { ModalPropsType } from '../../module/Modal.types';
import { ButtonContainer, ConfirmButton } from '../common/Button.styles';
import { Main, MainContainer } from './AlertModal.styles';

interface AlertModalProps extends ModalPropsType {
  message: string;
}

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
