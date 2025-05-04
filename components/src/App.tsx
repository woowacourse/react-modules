import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.ModalContainer isOpen={isOpen} position="top" width={400}>
          <Modal.ModalCloseButton onClose={onClose} />
          <Modal.ModalTitle>제목</Modal.ModalTitle>
          <Modal.ModalBody>내용1!</Modal.ModalBody>
        </Modal.ModalContainer>
      </Modal>
    </>
  );
}

export default App;
