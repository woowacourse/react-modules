import { useState } from 'react';
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
        primaryButtonText="동의하고 저장하기"
        onPrimaryButtonClick={() => alert('클릭됨')}
        secondaryButtonText="닫기"
        onSecondaryButtonClick={onClose}
      />
    </>
  );
}

export default App;
