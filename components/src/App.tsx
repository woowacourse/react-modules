import React, { useState } from 'react';
import { Modal } from './lib';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달열기</button>

      <Modal isOpen={isOpen} position="center" size="sm" close={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>모달입니다.</Modal.Title>
          <Modal.CloseButton close={() => setIsOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <Modal.Input value={value} fullWidth onChange={(e) => setValue(e.target.value)} />
        </Modal.Body>
        <Modal.Footer direction="row" position="right">
          <Modal.Button text="확인" color="none" size="md" variants="border"></Modal.Button>
          <Modal.Button text="확인" color="default" size="md"></Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
