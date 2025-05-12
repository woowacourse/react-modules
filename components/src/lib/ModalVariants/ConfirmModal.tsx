import Modal, { Size } from "../Modal/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  size: Size;
}

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  size,
}: ConfirmModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        hasTopCloseButton={false}
        size={size}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Modal.SecondaryButton>취소</Modal.SecondaryButton>
          <Modal.PrimaryButton>확인</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
