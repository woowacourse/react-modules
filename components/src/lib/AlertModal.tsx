import { Modal } from ".";
import { css } from "@emotion/css";
import { ModalSize } from "./common/Modal";

interface AlertModalProps {
  isOpen: boolean;
  closeModal: () => void;

  title: string;
  description: string;
  confirmLabel: string;
  size: ModalSize;
}
function AlertModal({ isOpen, closeModal, title, description, confirmLabel, size }: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" size={size}>
        <Modal.Header title={title} closeButton={true} onClose={closeModal} />
        <Modal.Content description={description} />
        <Modal.Footer
          confirmLabel={confirmLabel}
          onConfirm={closeModal}
          className={css`
            display: flex;
            flex-direction: row-reverse;
            gap: 12px;
            button {
              width: 80px;
            }
          `}
        />
      </Modal.Positioner>
    </Modal>
  );
}

export default AlertModal;
