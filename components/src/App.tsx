import React, { useReducer } from 'react';

import Modal from './lib/Modal';
import SelectBank from './components/SelectBank';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal
        isOpen={isOpen}
        content={<SelectBank />}
        onClose={() => toggleIsOpen()}
        title="카드사 선택"
        position="center"
        closeButton={<button style={{ width: '100%' }}>닫기 버튼</button>}
        confirmButton={<button style={{ width: '100%' }}>확인 버튼</button>}
        buttonPosition="column"
      />
    </>
  );
}

export default App;
