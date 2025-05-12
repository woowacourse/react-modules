import { useState } from "react";
import Modal, { Size } from "../Modal/Modal";
import styled from "@emotion/styled";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
  title: string;
  size?: Size;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

function PromptModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  size,
  primaryButtonText = "확인",
  secondaryButtonText = "취소",
}: PromptModalProps) {
  const [input, setInput] = useState("");

  const handleConfirm = () => {
    onConfirm(input);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleConfirm}
        hasTopCloseButton={false}
        size={size}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Modal.SecondaryButton>{secondaryButtonText}</Modal.SecondaryButton>
          <Modal.PrimaryButton>{primaryButtonText}</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PromptModal;

const Input = styled.input`
  height: 32px;
`;
