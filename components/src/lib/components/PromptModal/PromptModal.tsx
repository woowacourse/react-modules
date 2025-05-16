import { Modal } from '../..';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';
import { ButtonContainer } from '../common/Button.styles';
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
          <Button text="취소" varient="cancel" onClick={onClose} />
          <Button text="확인" varient="confirm" />
        </ButtonContainer>
      </FormContainer>
    </Modal>
  );
};

export default PromptModal;
