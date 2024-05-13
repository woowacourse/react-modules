import { Modal } from "..";
import { ModalMainProps } from "../type/modal.type";

export interface AlertModalProps extends ModalMainProps {
  title: string;
  message: string;
  buttonText?: string;
}

const AlertModal = ({ title, message, buttonText = "확인", ...rest }: AlertModalProps) => {
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
          onClick={rest.onClose}
        >
          {buttonText}
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
