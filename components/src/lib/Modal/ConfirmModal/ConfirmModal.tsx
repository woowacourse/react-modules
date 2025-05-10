import Modal from "../Modal";

interface ConfirmModalProps {
  position: "bottom" | "center";
  size: "small" | "medium" | "large";
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = ({
  position = "center",
  size = "medium",
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} size={size}>
      <Modal.Title>{title}</Modal.Title>
      {description && <Modal.Description>{description}</Modal.Description>}
      <Modal.Actions>
        <Modal.CloseButton onClick={onClose}>{cancelText}</Modal.CloseButton>
        <Modal.ConfirmButton onClick={onConfirm}>
          {confirmText}
        </Modal.ConfirmButton>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmModal;
