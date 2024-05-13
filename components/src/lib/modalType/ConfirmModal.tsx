import { Modal } from "..";
import { ModalMainProps } from "../type/modal.type";

export interface ConfirmModalProps extends ModalMainProps {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const ConfirmModal = ({ onConfirm, onCancel, title, message, confirmButtonText = "확인", cancelButtonText = "취소", ...rest }: ConfirmModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Message>{message}</Modal.Message>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Button
          size="small"
          onClick={onConfirm}
        >
          {confirmButtonText}
        </Modal.Button>
        <Modal.Button
          variant="secondary"
          size="small"
          onClick={onCancel}
        >
          {cancelButtonText}
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
