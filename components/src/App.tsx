import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';
import Button from './lib/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.ModalContainer isOpen={isOpen} position="top" width="large">
          <Modal.ModalCloseButton onClose={onClose} />
          <Modal.ModalTitle>제목</Modal.ModalTitle>
          <Modal.ModalBody>
            내용1! <Button position="right">확인</Button>
          </Modal.ModalBody>
        </Modal.ModalContainer>
      </Modal>
    </>
  );
}

export default App;
