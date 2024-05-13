import React, { useReducer, useState } from 'react';

import { AlertModal, ConfirmModal, PromptModal } from './lib';

function App() {
  const [isOpenAlert, toggleAlertModal] = useReducer(prev => !prev, false);
  const [isOpenConfirm, toggleConfirmModal] = useReducer(prev => !prev, false);
  const [isOpenPrompt, togglePromptModal] = useReducer(prev => !prev, false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <button onClick={toggleAlertModal}>Alert 모달열기</button>
      <button onClick={toggleConfirmModal}>Confirm 모달열기</button>
      <button onClick={togglePromptModal}>Prompt 모달열기</button>

      <AlertModal
        isOpen={isOpenAlert}
        onDimmedClick={() => toggleAlertModal()}
        onCloseIcon={() => toggleAlertModal()}
        onConfirmButton={() => toggleAlertModal()}
        title="AlertModal 제목입니다."
        content="AlertModal content 입니다."
        isAnimation
        animationDuration={300}
        buttonLabel="테스트"
      />
      <ConfirmModal
        isOpen={isOpenConfirm}
        onDimmedClick={() => toggleConfirmModal()}
        onCloseIcon={() => toggleConfirmModal()}
        onCloseButton={() => toggleConfirmModal()}
        onConfirmButton={() => toggleConfirmModal()}
        title="ConfirmModal 제목입니다."
        content="ConfirmModal content 입니다."
        isAnimation
        animationDuration={300}
        closeButtonLabel="취소?"
        confirmButtonLabel="확인?"
      />
      <PromptModal
        isOpen={isOpenPrompt}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        onDimmedClick={() => togglePromptModal()}
        onCloseIcon={() => togglePromptModal()}
        onCloseButton={() => togglePromptModal()}
        onConfirmButton={() => togglePromptModal()}
        title="ConfirmModal 제목입니다."
        content="ConfirmModal content 입니다."
        isAnimation
        animationDuration={300}
        closeButtonLabel="취소!"
        confirmButtonLabel="확인!"
      />
    </>
  );
}

export default App;
