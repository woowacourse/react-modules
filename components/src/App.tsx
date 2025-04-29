import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
// import { Modal } from 'pongda-modal-component';
// import { Modal } from 'pongda-modal-component';
import React from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Title title="제목" />
        <Modal.CloseButton />
        <Modal.Contents>
          <div>안녕하세요~</div>
        </Modal.Contents>
      </Modal>
    </>
  );
}

export default App;
