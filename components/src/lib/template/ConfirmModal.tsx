import Modal, { ModalProps } from '../Modal';

interface ConfirmModal extends ModalProps {
  onConfirmButtonClick: (e: React.MouseEvent) => void;
  onCancelButtonClick: (e: React.MouseEvent) => void;
}

const ConfirmModal = ({
  children,
  onConfirmButtonClick,
  onCancelButtonClick,
  ...args
}: ConfirmModal) => {
  return (
    <Modal {...args}>
      <Modal.Header>
        <Modal.Title title='카드를 삭제하시겠습니까?' />
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Modal.Button
          onClick={onCancelButtonClick}
          buttonColor={{
            backgroundColor: 'white',
            fontColor: '#8B95A1',
          }}
        >
          취소
        </Modal.Button>
        <Modal.Button onClick={onConfirmButtonClick}>확인</Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
