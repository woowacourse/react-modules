import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';

function getContent() {
  return <div>컨텐츠</div>;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setModalOpen(true)}>열기</button>
      <Modal
        title="모달"
        isOpen={modalOpen}
        onClose={onClose}
        contents={getContent()}
        showCloseButton={true}
      />
    </>
  );
}

export default App;
