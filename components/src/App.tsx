import React from 'react';
import './reset.css';

import Modal from './lib/Modal';
import useModal from './lib/hooks/useModal';
import CardCompanySelector from './components/CardCompanySelector';

function App() {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => toggleModal()}>모달 버튼</button>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          position="center"
          title="카드사 선택"
          closeOption="button"
        >
          <CardCompanySelector />
        </Modal>
      )}
    </>
  );
}

export default App;
