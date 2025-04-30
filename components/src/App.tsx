import { useState } from 'react';
import './App.css';
import { Modal } from 'lume_modal';

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
