import React, { useState } from 'react';
import { Modal } from '../src/lib/Modal';
import './App.css';
import GlobalStyles from './Global.style';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <GlobalStyles />
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal isOpen={isOpen} position="center" size="lg" close={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>제목</Modal.Title>
          <Modal.CloseButton close={() => setIsOpen(false)} />
        </Modal.Header>
        <Modal.Body>여긴 본문</Modal.Body>
        <Modal.Button text="확인" mode="primary"></Modal.Button>
        <Modal.Button text="닫기" mode="secondary" onClick={() => setIsOpen(false)}></Modal.Button>
      </Modal>
    </div>
  );
}

export default App;
