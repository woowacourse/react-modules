import React from "react";
import "./App.css";
import { Modal } from "./lib";
import { css } from "@emotion/css";
import { ModalSize } from "./lib/Modal";

interface AlertModalProps {
  isOpen: boolean;
  closeModal: () => void;
  confirmModal: () => void;

  title: string;
  description: string;
  confirmLabel: string;
  size: ModalSize;
}
function AlertModal({ isOpen, closeModal, confirmModal, title, description, confirmLabel, size }: AlertModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Modal.Positioner position="center" size={size}>
        <Modal.Header title={title} close={true} onClose={closeModal} />
        <Modal.Content description={description} />
        <Modal.Footer
          cancelLabel="cancel"
          confirmLabel={confirmLabel}
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

export default AlertModal;
