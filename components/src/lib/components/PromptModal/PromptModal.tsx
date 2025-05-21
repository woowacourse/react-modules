import { Modal } from '../..';
import { ModalAction, ModalContent } from '../../module/Modal.styles';
import { ModalPropsType } from '../../module/Modal.types';
import Button from '../common/Button';
import { FormContainer, InputField } from './PromptModal.styles';

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
  closeOnBackdropClick,
}: PromptModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      position={position}
      title={title}
      showCloseButton={false}
      size={size}
      onClose={onClose}
      closeOnBackdropClick={closeOnBackdropClick}
    >
      <FormContainer onSubmit={onSubmit}>
        <ModalContent>
          <InputField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </ModalContent>
        <ModalAction>
          <Button text="취소" variant="cancel" onClick={onClose} />
          <Button text="확인" variant="confirm" />
        </ModalAction>
      </FormContainer>
    </Modal>
  );
};

export default PromptModal;
