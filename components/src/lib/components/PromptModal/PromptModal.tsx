import { Modal } from '../..';
import { ModalPropsType } from '../../module/Modal.types';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from '../common/Button.styles';
import { FormContainer, InputField, MainContainer } from './PromptModal.styles';

interface PromptModalProps extends ModalPropsType {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PromptModal = ({
  isOpen,
  position,
  size,
  title,
  value,
  placeholder = '입력해주세요',
  onChange,
  onClose,
  onSubmit,
  onBackdropClick,
}: PromptModalProps) => {
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
      <FormContainer onSubmit={onSubmit}>
        <MainContainer>
          <InputField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </MainContainer>
        <ButtonContainer>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton>확인</ConfirmButton>
        </ButtonContainer>
      </FormContainer>
    </Modal>
  );
};

export default PromptModal;
