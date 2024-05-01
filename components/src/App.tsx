import React, { useState } from 'react';
import { Modal } from './lib';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal isOpen={isOpen} position="center" backdropType="blur" size="lg" close={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>제목</Modal.Title>
          <Modal.CloseButton close={() => setIsOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <p>모달입니다.</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button text="확인" mode="primary" size="lg"></Modal.Button>
          <Modal.Button text="닫기" mode="secondary" size="lg" onClick={() => setIsOpen(false)}></Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
