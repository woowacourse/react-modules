import { Modal } from '../..';
import { ButtonContainer } from '../common/Button.styles';
import { Main, MainContainer } from './ConfirmModal.styles';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';

interface ConfirmModalProps extends ModalPropsType {
  message: string;
  onConfirm: () => void;
}

const ConfirmModal = ({
  isOpen,
  position,
  size,
  title,
  message,
  onClose,
  onConfirm,
  onBackdropClick,
}: ConfirmModalProps) => {
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
        <Button text="취소" varient="cancel" onClick={onClose} />
        <Button text="확인" varient="confirm" onClick={onConfirm} />
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmModal;
