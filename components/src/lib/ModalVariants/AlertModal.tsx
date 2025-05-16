import { ReactNode } from "react";
import Modal, { Size } from "../Modal/Modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: ReactNode;
  size?: Size;
  primaryButtonText?: string;
}

function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  size,
  primaryButtonText = "확인",
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
          <Modal.PrimaryButton>{primaryButtonText}</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
