import { useState } from "react";
import Modal, { Size } from "../Modal/Modal";
import styled from "@emotion/styled";

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
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
        <Modal.Body>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Modal.PrimaryButton>취소</Modal.PrimaryButton>
          <Modal.SecondaryButton>확인</Modal.SecondaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PromptModal;

const Input = styled.input`
  height: 32px;
`;
