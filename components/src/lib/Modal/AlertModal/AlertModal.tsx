import Modal from "../Modal/Modal";
import "./AlertModal.css";

interface AlertModalProps {
  modalTitle: string;
  modalContents: string;
  modalSize?: ModalSize;
  closeModal: () => void;
  confirmButtonText?: string;
}

const AlertModal = (props: AlertModalProps) => {
  const confirmButtonText = props.confirmButtonText ? props.confirmButtonText : "확인";

  return (
    <Modal {...props}>
      <Modal.contents contents={props.modalContents} />
      <div className="modal-button-wrapper">
        <Modal.button
          size="small"
          buttonText={confirmButtonText}
          color="primary"
          onClick={props.closeModal}
        />
      </div>
    </Modal>
  );
};

export default AlertModal;
