import { ModalMainProps } from "../Modal";
import Modal, { ModalSize } from "../Modal";

export interface ConfirmModalProps extends ModalMainProps {
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  size?: ModalSize;
}
const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  size = "medium",
  confirmButtonText = "확인",
  cancelButtonText = "취소",
  position = "center",
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} size={size}>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Content>{children}</Modal.Content>
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
