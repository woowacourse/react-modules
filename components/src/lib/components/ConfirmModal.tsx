import { Modal, ModalProps } from './common/Modal';

type ConfirmModalProps = {
  onConfirm: () => void;
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  $zIndex?: number;
} & Omit<ModalProps, 'children'>;

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  size = 'medium',
  $zIndex = 1000,
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false} $zIndex={$zIndex}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container size={size}>
        <Modal.Title title={title} />
        <Modal.Description description={description} />
        <Modal.ButtonWrapper>
          <Modal.CancelButton $autoFocus={true}>취소</Modal.CancelButton>
          <Modal.ConfirmButton onClick={handleConfirm}>확인</Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default ConfirmModal;
