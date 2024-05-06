import React, { useState } from "react";
import "./App.css";
import { Modal } from "./lib";

function App() {
  const isOpenState = useState(false);

  const onOpen = () => {};

  const onConfirm = () => {};

  const onClose = () => {};

  return (
    <>
      <h1>Component Modules</h1>
      <button type="button" onClick={() => isOpenState[1](true)}>
        모달 열기
      </button>
      <Modal
        isOpenState={isOpenState}
        position="center"
        title="title"
        description="description"
        close={true}
        cancelLabel="cancel"
        confirmLabel="confirm"
        onOpen={onOpen}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    </>
  );
}

export default App;
