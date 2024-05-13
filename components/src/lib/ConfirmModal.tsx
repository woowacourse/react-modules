import { Modal } from ".";
import { ModalSize } from "./common/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  closeModal: () => void;
  confirmModal: () => void;

  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  size: ModalSize;
}
function ConfirmLabel({
  isOpen,
  closeModal,
  confirmModal,
  title,
  description,
  confirmLabel,
  cancelLabel,
  size,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" size={size}>
        <Modal.Header title={title} closeButton={true} onClose={closeModal} />
        <Modal.Content description={description} />
        <Modal.Footer
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
          onConfirm={confirmModal}
          onClose={closeModal}
          align="horizontal"
          buttonWidth="80px"
        />
      </Modal.Positioner>
    </Modal>
  );
}

export default ConfirmLabel;
