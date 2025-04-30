import { useState } from 'react';
import Modal from './modal/Modal';
import PrimaryButton from './modal/PrimaryButton';
import SecondaryButton from './modal/SecondaryButton';

function getContent() {
  return <div>컨텐츠</div>;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  const buttons = [
    <PrimaryButton label="동의하고 저장하기" onClick={() => alert('클릭됨')} />,
    <SecondaryButton label="닫기" onClick={onClose} />,
  ];

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
        buttons={buttons}
      />
    </>
  );
}

export default App;
