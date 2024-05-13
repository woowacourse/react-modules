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
  inputLabels?: string[];
  isDisplayLabel?: boolean;
}
function PromptModal({
  isOpen,
  closeModal,
  title,
  description,
  cancelLabel,
  confirmLabel,
  size,
  inputLabels = ["default"],
  isDisplayLabel = false,
}: PromptModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" size={size}>
        <Modal.Header title={title} closeButton={false} onClose={closeModal} />
        <Modal.Content description={description}>
          {inputLabels.map((label) => (
            <>
              {isDisplayLabel && <label key={label}></label>}
              <input
                key={`${label}_input`}
                className={css`
                  width: 100%;
                  height: 32px;
                  font-size: 11px;
                `}
              />
            </>
          ))}
        </Modal.Content>
        <Modal.Footer
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
          onConfirm={closeModal}
          onClose={closeModal}
          buttonWidth="80px"
          align="horizontal"
        />
      </Modal.Positioner>
    </Modal>
  );
}

export default PromptModal;
