import React from "react";
import "./Modal.css";
import Button from "../../Button/Button";
import ModalHeader from "../common/ModalHeader/ModalHeader";
import ModalContents from "../common/ModalContents/ModalContents";

interface ModalProps {
  modalTitle: string;
  position?: ModalPosition;
  modalSize?: ModalSize;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({
  modalTitle,
  position = "center",
  children,
  modalSize = "s",
  hasCloseButton = false,
  closeModal,
}: ModalProps) => {
  return (
    <div className="darr-modal">
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className={`modal-inner ${position} size-${modalSize}`}>
        <ModalHeader title={modalTitle} closeModal={closeModal} hasCloseButton={hasCloseButton} />
        {children}
      </div>
    </div>
  );
};

Modal.contents = ModalContents;
Modal.button = Button;

export default Modal;
