import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../../types/common';

interface PromptModalProps extends ModalProps {
  headerText: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
}

const PromptModal = ({ headerText, inputValue, onInputChange, onConfirm, ...modalProps }: PromptModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>
        <Input type="text" value={inputValue} onChange={onInputChange} />
      </ModalBody>
      <ModalFooter align="right">
        <Button type="button" text="취소" mode="secondary" size="sm" onClick={modalProps.close}></Button>
        <Button type="button" text="확인" size="sm" onClick={onConfirm}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default PromptModal;
