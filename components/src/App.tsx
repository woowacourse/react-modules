import React, { useReducer } from 'react';

import { Modal } from './lib';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen}></Modal>
    </>
  );
}

export default App;
