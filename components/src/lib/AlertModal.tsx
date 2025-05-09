import { Modal } from '.';

interface AlertModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onCloseClick: () => void;
  onConfirmClick: () => void;
  size?: 'small' | 'medium' | 'large';
  alertActionsWidth?: number;
}

function AlertModal({
  isOpen,
  title,
  content,
  onCloseClick,
  onConfirmClick,
  size,
  alertActionsWidth,
}: AlertModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Overlay onClick={onCloseClick} />
      <Modal.Content position="center" size={size}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{content}</Modal.Body>
        <Modal.AlertActions
          width={alertActionsWidth}
          onCancelClick={onCloseClick}
          onConfirmClick={onConfirmClick}
        />
      </Modal.Content>
    </Modal>
  );
}

export default AlertModal;
