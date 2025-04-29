import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const contents = (
    <div>
      <p>내용</p>
      <p>내용</p>
      <p>내용</p>
      <p>내용</p>
      <p>내용</p>
      <p>내용</p>
    </div>
  );
  return (
    <>
      <Modal
        isOpen={isOpen}
        title="sdlfk"
        onClose={handleClose}
        contents={contents}
      >
        <Modal.Title />
        <Modal.CloseButton />
      </Modal>
    </>
  );
}

export default App;
