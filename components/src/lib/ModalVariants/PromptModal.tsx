import { useState } from "react";
import Modal, { Size } from "../Modal/Modal";
import styled from "@emotion/styled";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
  title: string;
  size?: Size;
}

function PromptModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  size,
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
          <Modal.SecondaryButton>취소</Modal.SecondaryButton>
          <Modal.PrimaryButton>확인</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PromptModal;

const Input = styled.input`
  height: 32px;
`;
