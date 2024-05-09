import Modal, { ModalPosition, ModalSize } from "../Modal/Modal";

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  buttonText?: string;
  position?: ModalPosition;
  modalSize?: ModalSize;
}
const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  modalSize = "medium",
  buttonText = "확인",
  position = "center",
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      size={modalSize}
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>{message}</Modal.Content>
      <Modal.Footer>
        <Modal.StyledButton
          onClickEvent={onConfirm}
          label={buttonText}
          backgroundColor={"black"}
          size="small"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
