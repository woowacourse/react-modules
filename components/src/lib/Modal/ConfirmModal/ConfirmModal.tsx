import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../types/Modal.type';

export interface ConfirmModalProps extends ModalProps {
  headerText: string;
  bodyText: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onConfirm: () => void;
}

const ConfirmModal = ({
  headerText,
  bodyText,
  primaryButtonText = '확인',
  secondaryButtonText = '취소',
  onConfirm,
  ...modalProps
}: ConfirmModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter align="right">
        <Button type="button" text={secondaryButtonText} mode="secondary" size="sm" onClick={modalProps.close}></Button>
        <Button type="button" text={primaryButtonText} size="sm" onClick={onConfirm}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default ConfirmModal;
