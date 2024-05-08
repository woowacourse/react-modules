import React, { useReducer } from 'react';

import AlertModal from './components/AlertModal';
import ConfirmModal from './components/ConfirmModal';
import PromptModal from './components/PromptModal';

function App() {
  const [isOpenAlert, toggleAlertModal] = useReducer(prev => !prev, false);
  const [isOpenConfirm, toggleConfirmModal] = useReducer(prev => !prev, false);
  const [isOpenPrompt, togglePromptModal] = useReducer(prev => !prev, false);

  return (
    <>
      <button onClick={toggleAlertModal}>Alert 모달열기</button>
      <button onClick={toggleConfirmModal}>Confirm 모달열기</button>
      <button onClick={togglePromptModal}>Prompt 모달열기</button>

      <AlertModal isOpen={isOpenAlert} toggleIsOpen={toggleAlertModal} />
      <ConfirmModal isOpen={isOpenConfirm} toggleIsOpen={toggleConfirmModal} />
      <PromptModal isOpen={isOpenPrompt} toggleIsOpen={togglePromptModal} />
    </>
  );
}

export default App;
