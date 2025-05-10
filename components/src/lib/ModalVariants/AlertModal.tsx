import Modal, { Size } from "../Modal/Modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  size?: Size;
}

function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  size,
}: AlertModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        size={size}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Modal.SecondaryButton>확인</Modal.SecondaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
