import { Modal } from '../..';

interface AlertModalProps {
  title: string;
  content: string;
  onCloseClick?: () => void;
  onConfirmClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  alertActionsWidth?: number;
}

function AlertModal({
  title,
  content,
  onCloseClick,
  onConfirmClick,
  size,
  alertActionsWidth,
}: AlertModalProps) {
  return (
    <Modal.Container>
      <Modal.Overlay />
      <Modal.Content position="center" size={size}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Body>{content}</Modal.Body>
        <Modal.AlertActions
          width={alertActionsWidth}
          onCancelClick={onCloseClick}
          onConfirmClick={onConfirmClick}
        />
      </Modal.Content>
    </Modal.Container>
  );
}

export default AlertModal;
