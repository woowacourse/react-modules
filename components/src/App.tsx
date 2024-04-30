import React from 'react';
import { Modal } from '../src/lib/Modal';
import './App.css';

function App() {
  const handleClose = () => {
    alert('닫깅 ㅋ');
  };

  return (
    <div>
      <Modal position="center">
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton onClose={handleClose} />
        <Modal.Button text="확인" mode="primary"></Modal.Button>
        <Modal.Button text="닫기" mode="secondary"></Modal.Button>
      </Modal>
    </div>
  );
}

export default App;
