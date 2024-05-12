import Modal, { ModalProps } from "./Modal";
import React from "react";
export interface PromptModalProps extends ModalProps {
  labelText: string[];
  inputType: string[];
  htmlFor: string[];
}

const AlertModal: React.FC<PromptModalProps> = ({
  labelText,
  htmlFor,
  inputType,
  isOpen,
  size,
  position,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} position={position}>
      <Modal.ModalContent>
        <form>
          {labelText.map((text, index) => (
            <React.Fragment key={htmlFor[index]}>
              <Modal.ModalLabel htmlFor={htmlFor[index]}>
                {text}
              </Modal.ModalLabel>
              <Modal.ModalInput type={inputType[index]} />
            </React.Fragment>
          ))}
        </form>
      </Modal.ModalContent>
      <Modal.ModalFooter
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Modal.ModalButton
          size={"S"}
          style={{ marginRight: "22px" }}
          onClick={onClose}
        >
          확인
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default AlertModal;
