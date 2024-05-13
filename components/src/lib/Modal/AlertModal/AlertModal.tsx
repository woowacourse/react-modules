import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../types/Modal.type';

export interface AlertModalProps extends ModalProps {
  headerText: string;
  bodyText: string;
  buttonText?: string;
}

const AlertModal = ({ headerText, bodyText, buttonText = '확인', ...modalProps }: AlertModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter align="right">
        <Button type="button" text={buttonText} size="sm" onClick={modalProps.close}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default AlertModal;
