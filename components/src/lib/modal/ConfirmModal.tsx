import Modal, { ModalProps } from "./Modal";

export interface ConfirmModalProps extends ModalProps {
  title?: string;
  content: React.ReactNode;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  isOpen,
  content,
  size,
  position,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} position={position}>
      {title && (
        <Modal.ModalHeader>
          <Modal.ModalTitle>{title}</Modal.ModalTitle>
        </Modal.ModalHeader>
      )}
      <Modal.ModalContent>{content}</Modal.ModalContent>
      <Modal.ModalFooter align="right">
        <Modal.ModalButton size={"S"} onClick={onClose}>
          취소
        </Modal.ModalButton>
        <Modal.ModalButton
          size={"S"}
          style={{
            border: "1px solid #33333340",
            color: "#333333",
            backgroundColor: "white",
            marginRight: "22px",
          }}
          onClick={onConfirm}
        >
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
