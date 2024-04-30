import React from 'react';
import './App.css';
import Modal from './lib/Modal/Modal';
import { useState } from 'react';
import GlobalStyles from './style/global';
import DeleteIcon from './assets/deleteIcon.svg?react';

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
      <GlobalStyles />
      <h1>Component Modules</h1>
      <button onClick={handleOpen}>버튼</button>
      <Modal isOpen={isModalOpen} position="center" onClose={handleClose}>
        <Modal.Title> 약관에 동의해 주세요</Modal.Title>
        <Modal.CloseIcon onClick={handleClose}>
          <DeleteIcon />
        </Modal.CloseIcon>
        <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
        <Modal.ConfirmButton label="동의" onConfirm={handleConfirm} />
        <Modal.CloseButton label="닫기" onClose={handleClose} />
      </Modal>
    </>
  );
}

export default App;
