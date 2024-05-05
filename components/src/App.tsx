import React, { useReducer } from 'react';

import { Modal } from './lib';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen}>
        <Modal.Dimmed onDimmedClick={() => toggleIsOpen()} />
        <Modal.Header onClose={() => toggleIsOpen()}>제목</Modal.Header>
        <Modal.Content>
          <>
            <div>내용</div>
            <div>내용</div>
            <div>내용</div>
          </>
        </Modal.Content>
        <Modal.ConfirmButton
          onConfirm={() => {
            alert('확인');
            toggleIsOpen();
          }}
        >
          동의하고 저장하기
        </Modal.ConfirmButton>
        <Modal.CloseButton onClose={() => toggleIsOpen()}>닫기</Modal.CloseButton>
      </Modal>
    </>
  );
}

export default App;
