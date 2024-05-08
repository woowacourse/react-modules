import Modal from '../Modal';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmButtonLabel = '확인',
  cancelButtonLabel = '취소',
  onConfirm,
  onCancel,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Modal.Header
        title={title}
        hasCloseButton={false}
        onClose={onClose}
      />
      <Modal.Content>{message}</Modal.Content>
      <Modal.Footer direction="row">
        <Modal.Footer.Button
          style="secondary"
          onClick={onCancel}
        >
          {cancelButtonLabel}
        </Modal.Footer.Button>
        <Modal.Footer.Button
          style="primary"
          onClick={onConfirm}
        >
          {confirmButtonLabel}
        </Modal.Footer.Button>
      </Modal.Footer>
    </Modal>
  );
}
