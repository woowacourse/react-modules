import { Modal, useModal, ModalProvider, ModalProps } from './lib';
import './App.css';

function ModalContent({ modalType, closeType, titleText, ...otherProps }: ModalProps) {
  const { openModalHandler } = useModal();

  return (
    <>
      <Modal modalType={modalType} closeType={closeType} titleText={titleText} {...otherProps}>
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
    <ModalProvider>
      <ModalContent
        modalType={modalType}
        closeType={closeType}
        titleText={titleText}
        {...otherProps}
      />
    </ModalProvider>
  );
}

export default App;
