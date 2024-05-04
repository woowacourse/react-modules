import React from 'react';
import './reset.css';
import { Modal, useModal } from 'woowacourse-6th-react-modal-component';

import CardCompanySelector from './components/CardCompanySelector';

function App() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <>
      <h1>Component Modules</h1>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
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
