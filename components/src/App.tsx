import React from 'react';

import { PromptModal, useModal } from 'woowacourse-6th-react-modal-component';

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Prompt 모달 열기</button>
      {isModalOpen && (
        <PromptModal
          title="prompt 모달"
          basicDescription="모달 설명입니다."
          label="이름을 입력하세요."
          onModalClose={closeModal}
          onConfirmButtonClick={closeModal}
          onCancelButtonClick={closeModal}
          onInputChange={(event) => console.log(event.target.value)}
          $buttonSize="small"
          $buttonBackgroundColor="white"
          $buttonColor="black"
        />
      )}
    </>
  );
}

export default App;
