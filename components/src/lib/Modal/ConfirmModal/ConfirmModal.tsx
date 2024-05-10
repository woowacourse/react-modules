import Modal from "../Modal/Modal";
import "./ConfirmModal.css";

interface ConfirmModalProps {
  modalTitle: string;
  modalContents: string;
  modalSize?: ModalSize;
  closeModal: () => void;
  clickConfirm: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const confirmButtonText = props.confirmButtonText ? props.confirmButtonText : "확인";
  const cancelButtonText = props.cancelButtonText ? props.cancelButtonText : "취소";

  return (
    <Modal {...props}>
      <Modal.contents contents={props.modalContents} />
      <div className="modal-button-wrapper">
        <Modal.button
          size="small"
          buttonText={cancelButtonText}
          color="white"
          onClick={props.closeModal}
        />
        <Modal.button
          size="small"
          buttonText={confirmButtonText}
          color="primary"
          onClick={props.clickConfirm}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
