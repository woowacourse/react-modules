import Modal, { ModalProps } from '../Modal';

interface AlertModalProps extends ModalProps {
  onConfirmButtonClick: (e: React.MouseEvent) => void;
}

const AlertModal = ({
  children,
  onConfirmButtonClick,
  ...args
}: AlertModalProps) => {
  return (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='아이디를 입력해주세요' />
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer position='row'>
        <Modal.Button onClick={onConfirmButtonClick}>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
