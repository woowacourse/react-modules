import { Modal, ModalProps } from './common/Modal';

type AlertModalProps = {
  onConfirm: () => void;
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
} & Omit<ModalProps, 'children'>;

const AlertModal = ({
  isOpen,
  onClose,
  description,
  onConfirm,
  title,
  size = 'medium',
}: AlertModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeByEscapeKey={false}>
      <Modal.Backdrop closeByBackdrop={false} />
      <Modal.Container size={size}>
        <Modal.Title title={title} />
        <Modal.Description description={description} />
        <Modal.ButtonWrapper>
          <Modal.ConfirmButton onClick={handleConfirm} $autoFocus={true}>
            확인
          </Modal.ConfirmButton>
        </Modal.ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
};

export default AlertModal;
