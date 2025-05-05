import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  console.log('sdfghbsdfg');
  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Container isOpen={isOpen} position="top" width={400}>
          <>
            <Modal.CloseButton onClose={onClose} />
            <Modal.Title>제목</Modal.Title>
            <Modal.Body>내용1!</Modal.Body>
          </>
        </Modal.Container>
      </Modal>
    </>
  );
}

export default App;
