interface ModalProps {
  isOpen: boolean;
}

const Modal = ({ isOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div id="modal">
          <p>모달열림</p>
        </div>
      )}
    </>
  );
};

export default Modal;
