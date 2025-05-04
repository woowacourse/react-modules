import { useState } from 'react';
import { Modal } from './lib';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Modal Open</button>
      <Modal
        isOpen={isOpen}
        position="bottom"
        title="카드사 선택"
        onClose={() => setIsOpen(false)}
      >
        <h1>카드사 선택</h1>
      </Modal>
    </>
  );
}

export default App;
