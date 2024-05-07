import React, { useReducer } from 'react';

import { Modal } from './lib';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal isOpen={isOpen} position="center" isAnimation duration={300} size="small">
        <Modal.Dimmed onDimmedClick={() => toggleIsOpen()} />
        <Modal.Header>
          <Modal.Title title="제목" />
          <Modal.CloseIcon onClose={() => toggleIsOpen()} />
        </Modal.Header>
        <Modal.Content>
          <div>내용</div>
          <div>내용</div>
          <div>내용</div>
        </Modal.Content>
        <Modal.Footer>
          <Modal.ConfirmButton
            label="동의하고 저장하기"
            onConfirm={() => {
              alert('확인');
              toggleIsOpen();
            }}
          />
          <Modal.CloseButton label="닫기" onClose={() => toggleIsOpen()} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
