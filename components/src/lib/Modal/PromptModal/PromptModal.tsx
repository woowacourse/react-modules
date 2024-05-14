import Modal from "../Modal";

import useBlockScroll from "../../hooks/useBlockScroll";
import useKeyDown from "../../hooks/useKeyDown";

import { ModalProps, ModalSize } from "../../types/modal";

interface PromptModal extends ModalProps {
  title: string;
  inputValue: string;
  onSubmit: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  size?: ModalSize;
}

const PromptModal = ({
  isOpen,
  onClose,
  title,
  inputValue,
  onInputChange,
  onSubmit,
  device,
  position = "center",
  size = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
}: PromptModal) => {
  useKeyDown("Escape", onClose);

  useBlockScroll(isOpen);

  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} device={device}>
      <Modal.ModalContent size={size}>
        <Modal.ModalHeader>
          <Modal.ModalTitle text={title} />
        </Modal.ModalHeader>
        <Modal.ModalForm onSubmit={onSubmit}>
          <Modal.ModalInput value={inputValue} onChange={onInputChange} />
        </Modal.ModalForm>
        <Modal.ModalFooter justify="end">
          <Modal.ModalButton theme="white" width="fixed" onClick={onClose}>
            {cancelButtonText}
          </Modal.ModalButton>
          <Modal.ModalButton theme="dark" width="fixed" onClick={onSubmit}>
            {confirmButtonText}
          </Modal.ModalButton>
        </Modal.ModalFooter>
      </Modal.ModalContent>
    </Modal>
  );
};
export default PromptModal;
