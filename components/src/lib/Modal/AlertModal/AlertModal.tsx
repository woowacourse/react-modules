import Modal from '../Modal';

export interface AlertModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  checkButtonLabel?: string;
  onCheck: () => void;
  onClose: () => void;
}

export default function AlertModal({
  isOpen,
  title,
  message,
  checkButtonLabel = '확인',
  onCheck,
  onClose,
}: AlertModalProps) {
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
        <Modal.Footer.Button onClick={onCheck}>{checkButtonLabel}</Modal.Footer.Button>
      </Modal.Footer>
    </Modal>
  );
}
