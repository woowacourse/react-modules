import React, { useReducer } from 'react';

import SelectBank from './components/SelectBank';
import { Modal } from './lib/index';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <Modal open={isOpen} onClose={() => toggleIsOpen()} type="drawer">
        <Modal.Header title="카드사 선택" onClose={toggleIsOpen} />
        <Modal.Content>
          <SelectBank />
        </Modal.Content>
        <Modal.Footer
          buttonPosition="column-reverse"
          closeButton={{
            text: '취소',
            onClick: () => console.log('취소'),
          }}
          confirmButton={{
            text: '동의하고 확인하기',
            onClick: () => console.log('확인'),
          }}
        />
      </Modal>
    </>
  );
}

export default App;
