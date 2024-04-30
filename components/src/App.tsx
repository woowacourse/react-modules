import React from 'react';
import { Modal } from '../src/lib/Modal';
import './App.css';

function App() {
  const handleClose = () => {
    alert('닫깅 ㅋ');
  };

  return (
    <>
      <Modal position="center">
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton onClose={handleClose} />
        sdkfjaksl
        <Modal.Button text="확인"></Modal.Button>
      </Modal>
    </>
  );
}

export default App;
