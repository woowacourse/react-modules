import { Modal, ModalProps } from './common/Modal';

type AlertModalProps = {
  onConfirm: () => void;
  title: string;
  description?: string;
} & Omit<ModalProps, 'children'>;

const AlertModal = ({ isOpen, onClose, description, onConfirm, title }: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container>
        <Modal.Title title={title} />
        <Modal.Description description={description} />
        <Modal.ButtonWrapper>
          <Modal.ConfirmButton onClick={onConfirm}>확인</Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default AlertModal;
