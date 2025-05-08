interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div id="modal">
          <p>모달열림</p>
          <div data-testid="modal-close" onClick={() => onClose()}>
            모달닫기
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
