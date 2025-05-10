import Modal from "../Modal";

interface AlertModalProps {
  position: "bottom" | "center";
  size: "small" | "medium" | "large";
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmText?: string;
}

const AlertModal = ({
  position = "center",
  size = "medium",
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "확인",
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} size={size}>
      <Modal.Title>{title}</Modal.Title>
      {description && <Modal.Description>{description}</Modal.Description>}
      <Modal.Actions>
        <Modal.ConfirmButton onClick={onConfirm}>
          {confirmText}
        </Modal.ConfirmButton>
      </Modal.Actions>
    </Modal>
  );
};

export default AlertModal;
