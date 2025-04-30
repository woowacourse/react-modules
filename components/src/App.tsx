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
        // TODO: Modal.Button 만들기 // TODO: footer 만들기 // TODO: 모달 최소
        크기 0으로 설정
      </Modal>
    </>
  );
}

export default App;
