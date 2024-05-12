import React from 'react';

import {
  Modal,
  PromptModal,
  useModal,
} from 'woowacourse-6th-react-modal-component';

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal.Button onButtonClick={openModal}>Prompt 모달 열기</Modal.Button>
      {isModalOpen && (
        <PromptModal
          title="prompt 모달"
          label="이름을 입력하세요."
          onModalClose={closeModal}
          onConfirmButtonClick={closeModal}
          onCancelButtonClick={closeModal}
          onInputChange={(event) => console.log(event.target.value)}
        />
      )}
    </>
  );
}

export default App;
