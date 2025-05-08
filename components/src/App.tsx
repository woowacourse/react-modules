import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>
      <Modal isOpen={isOpen}>
        <Modal.Overlay onClick={handleCloseClick} />
        <Modal.Content position="top" width={400}>
          <Modal.CloseButton onCloseClick={handleCloseClick} />
          <Modal.Title>제목</Modal.Title>
          <Modal.Body>내용1!</Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
