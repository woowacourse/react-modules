import React, { useState } from "react";
import "./App.css";
import { Modal } from "./lib";
import useModalState from "./lib/useModalState";

function App() {
  const { isOpen, openModal, closeModal, confirmModal } = useModalState(false, {});

  return (
    <>
      <h1>Component Modules</h1>
      <button
        type="button"
        onClick={openModal}
      >
        모달 열기
      </button>
      <Modal
        position="center"
        title="title"
        description="description"
        close={true}
        cancelLabel="cancel"
        confirmLabel="confirm"
        isOpen={isOpen}
        closeModal={closeModal}
        confirmModal={confirmModal}
      />
    </>
  );
}

export default App;
