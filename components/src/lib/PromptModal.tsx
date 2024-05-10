import { Modal } from ".";
import { css } from "@emotion/css";
import { ModalSize } from "./common/Modal";

interface PromptModalProps {
  isOpen: boolean;
  closeModal: () => void;

  title: string;
  description?: string;
  confirmLabel: string;
  cancelLabel: string;
  size: ModalSize;
}
function PromptModal({ isOpen, closeModal, title, description, cancelLabel, confirmLabel, size }: PromptModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" size={size}>
        <Modal.Header title={title} closeButton={false} onClose={closeModal} />
        <Modal.Content description={description}>
          <input
            className={css`
              width: 100%;
              height: 32px;
              font-size: 11px;
            `}
          />
        </Modal.Content>
        <Modal.Footer
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
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

export default PromptModal;
