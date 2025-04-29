import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setModalOpen(true)}>열기</button>
      <Modal isOpen={modalOpen} onClose={onClose} />
    </>
  );
}

export default App;
