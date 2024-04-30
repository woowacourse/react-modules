import React from 'react';
import './App.css';
import './reset.css';
import { Modal } from './lib/index';
import useModal from './hooks/useModal';

function App() {
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <h1>Component Modules</h1>
      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          position="center"
          title="카드사 선택"
          closeOption="icon"
        >
          <div></div>
        </Modal>
      )}
    </>
  );
}

export default App;
