import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../../types/common';

interface ConfirmModalProps extends ModalProps {
  headerText: string;
  bodyText: string;
  onConfirm: () => void;
}

const ConfirmModal = ({ headerText, bodyText, onConfirm, ...modalProps }: ConfirmModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter align="right">
        <Button type="button" text="취소" mode="secondary" size="sm" onClick={modalProps.close}></Button>
        <Button type="button" text="확인" size="sm" onClick={onConfirm}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default ConfirmModal;
