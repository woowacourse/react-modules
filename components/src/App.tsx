import React, { useState } from 'react';
import Modal from './lib/Modal';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {isOpened ? (
        <Modal
          closeButton={{
            onClose: () => {
              setIsOpened(false);
            },
          }}
          modalPosition='bottom'
          title={{ position: 'center', content: 'test' }}
          subtitle={{ content: '123123' }}
          backgroundColor='white'
          confirmButton={{
            content: '확인',
            onConfirm: () => {
              alert('확인');
            },
          }}
          cancelButton={{
            content: '취소',
            onCancel: () => {
              alert('취소');
            },
          }}
          children={<p>hi</p>}
          preventCloseOnOutsideClick={true}
        />
      ) : (
        <button onClick={() => setIsOpened(true)}>모달 열기</button>
      )}
    </>
  );
}

export default App;
