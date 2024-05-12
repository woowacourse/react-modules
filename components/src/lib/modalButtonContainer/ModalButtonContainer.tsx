import { Modal } from "../../lib";
import { ModalButtonContainerProps } from "../type/modal.type";
import "./ModalButtonContainer.css";

const ModalButtonContainer = ({ type, onConfirm, onCancel, onClose, onSubmit }: ModalButtonContainerProps) => {
  switch (type) {
    case "prompt":
      return (
        <div className="modal-custom-button-container">
          <Modal.Button
            size="small"
            onClick={onSubmit}
          >
            확인
          </Modal.Button>
          <Modal.Button
            variant="secondary"
            size="small"
            onClick={onCancel}
          >
            취소
          </Modal.Button>
        </div>
      );
    case "confirm":
      return (
        <div className="modal-custom-button-container">
          <Modal.Button
            size="small"
            onClick={onConfirm}
          >
            확인
          </Modal.Button>
          <Modal.Button
            variant="secondary"
            size="small"
            onClick={onCancel}
          >
            취소
          </Modal.Button>
        </div>
      );
    case "alert":
      return (
        <div className="modal-custom-button-container">
          <Modal.Button
            size="small"
            onClick={onClose}
          >
            확인
          </Modal.Button>
        </div>
      );
    default:
      return null;
  }
};

export default ModalButtonContainer;
