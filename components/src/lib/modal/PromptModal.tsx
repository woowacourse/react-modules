import Modal, { ModalProps } from "./Modal";

export interface PromptModalProps extends ModalProps {
  labelText: string;
  inputType: string;
  htmlFor: string;
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
        <Modal.ModalLabel htmlFor={htmlFor}>{labelText}</Modal.ModalLabel>
        <Modal.ModalInput type={inputType}></Modal.ModalInput>
      </Modal.ModalContent>
      <Modal.ModalFooter
        style={{
          display: "flex",
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
