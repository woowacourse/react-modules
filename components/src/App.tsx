import { Modal, useModal, ModalProvider, ModalProps } from './lib';
import './App.css';

function ModalContent() {
  const { openModalHandler } = useModal();

  return (
    <>
      <Modal>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
        <p style={{ color: 'black' }}>Test!!!!!!</p>
      </Modal>
      <div className="button-container">
        <button className="click-me-button" onClick={openModalHandler}>
          click me!!
        </button>
      </div>
    </>
  );
}

function App({ modalType, closeType, titleText, ...otherProps }: ModalProps) {
  return (
    <ModalProvider
      modalType={modalType}
      closeType={closeType}
      titleText={titleText}
      {...otherProps}
    >
      <ModalContent />
    </ModalProvider>
  );
}

export default App;
