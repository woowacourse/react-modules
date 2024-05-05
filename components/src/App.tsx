import React, { useReducer } from 'react';

import SelectBank from './components/SelectBank';
import Modal from './lib/Modal';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal
        open={isOpen}
        content={<SelectBank />}
        onClose={() => toggleIsOpen()}
        title="카드사 선택"
        type="drawer"
        buttonPosition="column"
      />
    </>
  );
}

export default App;
