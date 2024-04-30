import React from 'react';
import './App.css';
import Modal from './lib/Modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleConfirm = () => {
    setIsModalOpen(false);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <h1>Component Modules</h1>
      <h1>Component Modules</h1>
      <h1>Component Modules</h1>
      <h1>Component Modules</h1>
      <h1>Component Modules</h1>
      <h1>Component Modules</h1>
      <button onClick={handleOpen}>버튼</button>
      <Modal
        position="center"
        title="알림"
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onClose={handleClose}
      >
        <div>모달 내용입니다.</div>
      </Modal>
    </>
  );
}

export default App;
