import { useState } from 'react';
import Modal from './shared/components/modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function handleEscClick(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      closeModal();
    }
    console.log('esc 클릭!');
  }

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <p>Modal Content</p>
          <button>X</button>
        </Modal>
      )}
    </>
  );
}

export default App;
