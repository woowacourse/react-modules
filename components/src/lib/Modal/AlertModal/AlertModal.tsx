import Modal from "../Modal";

import { ModalProps, ModalSize } from "../../types/modal";
import useKeyDown from "../../hooks/useKeyDown";
import useBlockScroll from "../../hooks/useBlockScroll";

export interface AlertModalProps extends ModalProps {
  title: string;
  alertText: string;
  size?: ModalSize;
  buttonText?: string;
}

const AlertModal = ({ isOpen, onClose, title, alertText, device, position = "center", size = "medium", buttonText = "확인" }: AlertModalProps) => {
  useKeyDown("Escape", onClose);

  useBlockScroll(isOpen);

  return (
    <Modal isOpen={isOpen} onClose={onClose} position={position} device={device}>
      <Modal.ModalContent size={size}>
        <Modal.ModalHeader>
          <Modal.ModalTitle text={title} />
        </Modal.ModalHeader>
        <span>{alertText}</span>
        <Modal.ModalFooter justify="end">
          <Modal.ModalButton theme="dark" width="fixed" onClick={onClose}>
            {buttonText}
          </Modal.ModalButton>
        </Modal.ModalFooter>
      </Modal.ModalContent>
    </Modal>
  );
};

export default AlertModal;
