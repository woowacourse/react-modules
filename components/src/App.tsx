import React from "react";
import "./App.css";
import useModalState from "./lib/useModalState";

import AlertModal from "./AlertModal";

function App() {
  const { isOpen, openModal, closeModal, confirmModal } = useModalState(false, {});

  return (
    <>
      <h1>Component Modules</h1>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>

      <AlertModal
        isOpen={isOpen}
        closeModal={closeModal}
        confirmModal={confirmModal}
        title="아이디를 입력해 주세요."
        description="아이디는 필수로 입력해야 합니다."
        confirmLabel="확인"
        size="medium"
      />
    </>
  );
}

export default App;
