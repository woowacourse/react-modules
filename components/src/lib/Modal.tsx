import "./Modal.css";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  position: "center" | "bottom";
  content: React.ReactNode;
  modalContainerStyle?: React.CSSProperties;
};

const Modal = ({ onClose, isOpen, title, position, content, modalContainerStyle }: ModalProps) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {isOpen && (
        <div
          className="back-drop"
          onClick={onClose}
        >
          <div className="modal-container">
            <div
              className={`container ${position}`}
              style={modalContainerStyle}
            >
              <div className="title">{title}</div>
              <div className="content">{content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
