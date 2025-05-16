import { Modal } from '../..';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from '../common/Button.styles';
import { Main, MainContainer } from './ConfirmModal.styles';
import { ModalPropsType } from '../../module/Modal.types';

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
        <CancelButton onClick={onClose}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmModal;
