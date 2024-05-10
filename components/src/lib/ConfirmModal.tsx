import React from "react";
// import "./App.css";
import { Modal } from ".";
import { css } from "@emotion/css";
import { ModalSize } from "./common/Modal";

interface AlertModalProps {
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
}: AlertModalProps) {
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

export default ConfirmLabel;
