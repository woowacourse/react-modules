import { Modal } from '../../lib';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from '../common/Button.styles';
import { Main, MainContainer } from './ConfirmModal.styles';

type ConfirmModalProps = {
  isOpen: boolean;
  position: 'center' | 'bottom';
  size: 'small' | 'medium' | 'large';
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ConfirmModal = ({
  isOpen,
  position,
  size,
  onClose,
  onBackdropClick,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title="카드를 삭제하시겠습니까?"
      showCloseButton={false}
      size={size}
      onClose={onClose}
      onBackdropClick={onBackdropClick}
    >
      <MainContainer>
        <Main>삭제하면 복구하실 수 없습니다.</Main>
      </MainContainer>
      <ButtonContainer>
        <CancelButton onClick={onClose}>취소</CancelButton>
        <ConfirmButton>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmModal;
