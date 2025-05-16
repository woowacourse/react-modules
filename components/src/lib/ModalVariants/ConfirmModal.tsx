import { ReactNode } from "react";
import Modal, { Size } from "../Modal/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: ReactNode;
  size: Size;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
  size,
  primaryButtonText = "확인",
  secondaryButtonText = "취소",
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
          <Modal.SecondaryButton>{secondaryButtonText}</Modal.SecondaryButton>
          <Modal.PrimaryButton>{primaryButtonText}</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
