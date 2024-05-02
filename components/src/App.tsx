import React from 'react';
import { useState } from 'react';
import { Modal } from '@jaymyong66/simple-modal';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <div className="app">
      <Modal position="bottom" isOpen={isOpen} onToggle={handleToggle}>
        <Modal.ModalHeader title="카드사 선택"></Modal.ModalHeader>
        <Modal.ModalContent>
          <div style={{ height: '1000px', width: '1000px' }}>zz</div>
        </Modal.ModalContent>
        <Modal.ModalFooter>zz</Modal.ModalFooter>
      </Modal>
      <button onClick={handleToggle}>zz</button>
    </div>
  );
}
export default App;
