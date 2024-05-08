import React, { useReducer } from 'react';

import { AlertModal, ConfirmModal, Modal, PromptModal } from './lib';
import SelectBank from './components/SelectBank';

function App() {
  const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false);
  const [isAlertModalOpen, toggleAlertModalOpen] = useReducer(prev => !prev, false);
  const [isConfirmModalOpen, toggleConfirmModalOpen] = useReducer(prev => !prev, false);
  const [isPromptModalOpen, togglePromptModalOpen] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleIsOpen}>모달열기</button>
      <button onClick={toggleAlertModalOpen}>alert</button>
      <button onClick={toggleConfirmModalOpen}>confirm</button>
      <button onClick={togglePromptModalOpen}>prompt</button>
      <AlertModal
        open={isAlertModalOpen}
        onClose={() => toggleAlertModalOpen()}
        title="안녕"
        caption=""
      />
      <ConfirmModal
        open={isConfirmModalOpen}
        onClose={() => toggleConfirmModalOpen()}
        title="안녕"
        caption=""
      />
      <PromptModal open={isPromptModalOpen} onClose={() => togglePromptModalOpen()} title="안녕" />
      <Modal open={isOpen} onClose={() => toggleIsOpen()} type="drawer" closeOnESCKeydown>
        <Modal.Header title="카드사 선택" onClose={toggleIsOpen} />
        <Modal.Content>
          <SelectBank />
        </Modal.Content>
        <Modal.Footer
          buttonPosition="column-reverse"
          closeButton={{
            role: 'close',
            text: '취소',
            onClick: () => console.log('취소'),
          }}
          confirmButton={{
            role: 'confirm',
            text: '동의하고 확인하기',
            onClick: () => console.log('확인'),
          }}
        />
      </Modal>
    </>
  );
}

export default App;
