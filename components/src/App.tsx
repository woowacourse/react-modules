import Modal from './lib/Modal.tsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div>
      {isShowModal && (
        <Modal
          position="bottom"
          title="모달"
          onClose={() => {
            setIsShowModal(false);
          }}
        >
          <div>모달 내용</div>
        </Modal>
      )}
      <button onClick={() => setIsShowModal(true)}>모달 열기</button>
    </div>
  );
}

export default App;
