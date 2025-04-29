import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    console.log('모달이 열렸습니다.');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열기</button>
      {isOpen && (
        <Modal
          position="center"
          title="알림"
          content="모달 내용"
          onConfirm={() => {}}
          onClose={() => setIsOpen(false)}
          onOpen={handleOpen}
        />
      )}
    </>
  );
}

export default App;
