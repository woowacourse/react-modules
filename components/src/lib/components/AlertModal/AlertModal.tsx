import { Modal } from '../..';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';
import { ButtonContainer } from '../common/Button.styles';
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
        <Button text={'확인'} varient={'confirm'} onClick={onClose} />
      </ButtonContainer>
    </Modal>
  );
};

export default AlertModal;
