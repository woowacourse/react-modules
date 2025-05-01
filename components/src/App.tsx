import {useState} from 'react';
import './App.css';
import {Modal} from '@muffin2219/components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div style={{padding: '20px'}}>
          <h3>모달 내용</h3>
          <p>
            모달 컴포넌트의 children으로 다양한 콘텐츠를 추가할 수 있습니다.
          </p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
