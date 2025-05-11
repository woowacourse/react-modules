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

        <Modal.Contents>
          <Modal.Input placeholder="입력하세요" />
          <div> 내용1</div>
          <div> 내용2</div>
          <div> 내용3</div>
        </Modal.Contents>
        <Modal.ButtonContainer position="center">
          <Modal.Button
            title="확인"
            backgroundColor="#00fdff"
            textColor="#000000"
            border="1px solid #000000"
            size="small"
            onClick={() => {
              console.log('확인 버튼 클릭!');
            }}
          />

          <Modal.Button
            title="취소"
            backgroundColor="#011fff"
            textColor="#000000"
            border="1px solid #000000"
            size="small"
            onClick={() => {
              console.log('취소 버튼 클릭!');
            }}
          />
        </Modal.ButtonContainer>
        <Modal.CloseButton />
      </Modal>
    </>
  );
}

export default App;
