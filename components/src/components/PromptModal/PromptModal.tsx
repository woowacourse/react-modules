import { Modal } from '../../lib';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from '../common/Button.styles';
import { InputField, MainContainer } from './PromptModal.styles';

type PromptModalProps = {
  isOpen: boolean;
  position: 'center' | 'bottom';
  size: 'small' | 'medium' | 'large';
  onClose: () => void;
  onBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const PromptModal = ({
  isOpen,
  position,
  size,
  onClose,
  onBackdropClick,
}: PromptModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title="쿠폰 번호를 입력해 주세요."
      showCloseButton={false}
      size={size}
      onClose={onClose}
      onBackdropClick={onBackdropClick}
    >
      <MainContainer>
        <InputField placeholder="1234" />
      </MainContainer>
      <ButtonContainer>
        <CancelButton onClick={onClose}>취소</CancelButton>
        <ConfirmButton>확인</ConfirmButton>
      </ButtonContainer>
    </Modal>
  );
};

export default PromptModal;
