import { Modal } from 'jurunghappy-modal';
import './App.css';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <Modal
        isModalOpen={isModalOpen}
        position="center"
        title="카드사 선택"
        onClose={() => setIsModalOpen(false)}
      >
        <h1>카드사 선택</h1>
      </Modal>
    </>
  );
}

export default App;
