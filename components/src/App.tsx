import React, { useReducer } from 'react';

import Modal from './lib/Modal';
import SelectBank from './components/SelectBank';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen} onClose={() => toggleIsOpen()} title="카드사 선택" position="center">
        <SelectBank />
      </Modal>
    </>
  );
}

export default App;
