import { Modal, ModalProps } from './Modal';

type AlertModalProps = {
  onConfirm: () => void;
  title: string;
} & ModalProps;

const AlertModal = ({ isOpen, onClose, children, onConfirm, title }: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container>
        <Modal.Title title={title} />
        {children}
        <Modal.ButtonWrapper>
          <Modal.ConfirmButton onClick={onConfirm}>확인</Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default AlertModal;
