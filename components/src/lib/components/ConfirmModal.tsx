import { Modal, ModalProps } from './Modal';

type ConfirmModalProps = {
  onConfirm: () => void;
  title: string;
} & ModalProps;

const ConfirmModal = ({ isOpen, onClose, children, onConfirm, title }: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container>
        <Modal.Title title={title} />
        {children}
        <Modal.ButtonWrapper>
          <Modal.CancelButton>취소</Modal.CancelButton>
          <Modal.ConfirmButton onClick={onConfirm}>확인</Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default ConfirmModal;
