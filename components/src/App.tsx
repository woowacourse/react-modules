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
      <Modal isOpen={isOpen} title="sdlfk" onClose={handleClose}>
        <Modal.Title />
        <Modal.CloseButton />
        <Modal.Contents>
          <div>안녕하세요~</div>
        </Modal.Contents>
      </Modal>
    </>
  );
}

export default App;
