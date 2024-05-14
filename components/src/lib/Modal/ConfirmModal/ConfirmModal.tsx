import Modal from "../Modal";

import useBlockScroll from "../../hooks/useBlockScroll";
import useKeyDown from "../../hooks/useKeyDown";

import { ModalProps, ModalSize } from "../../types/modal";

interface ConfirmModalProps extends ModalProps {
  title: string;
  confirmText: string;
  onConfirm: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  size?: ModalSize;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  title,
  confirmText,
  onConfirm,
  device,
  position = "center",
  size = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
}: ConfirmModalProps) => {
  useKeyDown("Escape", onClose);

  useBlockScroll(isOpen);

  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} device={device}>
      <Modal.ModalContent size={size}>
        <Modal.ModalHeader>
          <Modal.ModalTitle text={title} />
        </Modal.ModalHeader>
        <span>{confirmText}</span>
        <Modal.ModalFooter justify="end">
          <Modal.ModalButton theme="white" width="fixed" onClick={onClose}>
            {cancelButtonText}
          </Modal.ModalButton>
          <Modal.ModalButton theme="dark" width="fixed" onClick={onConfirm}>
            {confirmButtonText}
          </Modal.ModalButton>
        </Modal.ModalFooter>
      </Modal.ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
