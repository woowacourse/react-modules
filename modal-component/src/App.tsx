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
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Title title="제목" />
        <Modal.CloseButton />
        <Modal.Contents>
          <div>안녕하세요~</div>
        </Modal.Contents>
        <Modal.Button
          title="취소"
          backgroundColor="#ffffff"
          textColor="#000000"
          border="1px solid #000000"
          // size=""
          onClick={() => {
            console.log('확인 버튼 클릭!');
          }}
        />
      </Modal>
    </>
  );
}

export default App;
