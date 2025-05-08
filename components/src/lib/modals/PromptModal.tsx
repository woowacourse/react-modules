import { ReactNode } from "react";
import Modal from "../Modal";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: ReactNode;
}

function PromptModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  content,
}: PromptModalProps) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        hasTopCloseButton={false}
        primaryButton={true}
        primaryButtonText="취소"
        secondaryButton={true}
        secondaryButtonText="확인"
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default PromptModal;
