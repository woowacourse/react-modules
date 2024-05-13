import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../types/Modal.type';

export interface PromptModalProps extends ModalProps {
  headerText: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
}

const PromptModal = ({
  headerText,
  primaryButtonText = '확인',
  secondaryButtonText = '취소',
  inputValue,
  onInputChange,
  onConfirm,
  ...modalProps
}: PromptModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>
        <Input type="text" value={inputValue} onChange={onInputChange} />
      </ModalBody>
      <ModalFooter align="right">
        <Button type="button" text={secondaryButtonText} mode="secondary" size="sm" onClick={modalProps.close}></Button>
        <Button type="button" text={primaryButtonText} size="sm" onClick={onConfirm}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default PromptModal;
