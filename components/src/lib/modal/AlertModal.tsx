import Modal, { ModalProps } from "./Modal";

export interface AlertModalProps extends ModalProps {
  title?: string;
  content: React.ReactNode;
}

const AlertModal: React.FC<AlertModalProps> = ({
  title,
  isOpen,
  content,
  size,
  position,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} position={position}>
      {title && (
        <Modal.ModalHeader>
          <Modal.ModalTitle>{title}</Modal.ModalTitle>
        </Modal.ModalHeader>
      )}
      <Modal.ModalContent>{content}</Modal.ModalContent>
      <Modal.ModalFooter
        align="right"
        style={{
          marginRight: "22px",
        }}
      >
        <Modal.ModalButton size={"S"} onClick={onClose}>
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default AlertModal;
