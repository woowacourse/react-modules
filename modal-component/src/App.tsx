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
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
        size="medium"
      >
        <Modal.Title title="제목" />
        <Modal.CloseButton />
        <Modal.Contents>
          <Modal.Input placeholder="입력하세요" />
        </Modal.Contents>
        <Modal.Button
          title="취소"
          backgroundColor="#ffffff"
          textColor="#000000"
          border="1px solid #000000"
          size="small"
          onClick={() => {
            console.log('확인 버튼 클릭!');
          }}
        />
      </Modal>
    </>
  );
}

export default App;
