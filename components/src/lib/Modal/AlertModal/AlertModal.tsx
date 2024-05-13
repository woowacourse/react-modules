import Modal, { ModalPosition, ModalSize } from "../Modal";

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  buttonText?: string;
  position?: ModalPosition;
  modalSize?: ModalSize;
  children?: React.ReactNode;
}
const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  modalSize = "medium",
  buttonText = "확인",
  position = "center",
  children,
}: AlertModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      position={position}
      size={modalSize}
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>{children}</Modal.Content>
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
