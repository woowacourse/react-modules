import { useState } from 'react';
import './App.css';
import Modal from './lib/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
