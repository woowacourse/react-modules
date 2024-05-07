import MainModal from '../MainModal/MainModal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { ModalHeader, ModalBody, ModalFooter } from '../../components/ModalLayout/ModalLayout';
import type { ModalProps } from '../../types/common';

interface AlertModalProps extends ModalProps {
  headerText: string;
  bodyText: string;
}

const AlertModal = ({ headerText, bodyText, ...modalProps }: AlertModalProps) => {
  return (
    <MainModal {...modalProps}>
      <ModalHeader>
        <Title>{headerText}</Title>
      </ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter align="right">
        <Button type="button" text="확인" size="sm" onClick={modalProps.close}></Button>
      </ModalFooter>
    </MainModal>
  );
};

export default AlertModal;
