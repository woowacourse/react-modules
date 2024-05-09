import Modal, { ModalPosition, ModalSize } from "../Modal/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  position?: ModalPosition;
  modalSize?: ModalSize;
}
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  modalSize = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
  position = "center",
}: ConfirmModalProps) => {
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
          onClickEvent={onClose}
          label={cancelButtonText}
          backgroundColor={"white"}
          size="small"
        />
        <Modal.StyledButton
          onClickEvent={onConfirm}
          label={confirmButtonText}
          backgroundColor={"black"}
          size="small"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
