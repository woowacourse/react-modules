import { ChangeEventHandler } from "react";
import Modal from "../Modal/Modal";
import "./PromptModal.css";

interface PromptModalProps {
  modalTitle: string;
  inputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  modalSize?: ModalSize;
  closeModal: () => void;
  clickConfirm: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const PromptModal = (props: PromptModalProps) => {
  const PromptButtonText = props.confirmButtonText ? props.confirmButtonText : "확인";
  const cancelButtonText = props.cancelButtonText ? props.cancelButtonText : "취소";

  return (
    <Modal {...props}>
      <input className="modal-input" value={props.inputValue} onChange={props.handleInputChange} />
      <div className="modal-button-wrapper">
        <Modal.button
          size="small"
          buttonText={cancelButtonText}
          color="white"
          onClick={props.closeModal}
        />
        <Modal.button
          size="small"
          buttonText={PromptButtonText}
          color="primary"
          onClick={props.clickConfirm}
        />
      </div>
    </Modal>
  );
};

export default PromptModal;
