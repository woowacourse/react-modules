import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} title="sdlfk" onClose={handleClose} />
    </>
  );
}

export default App;
