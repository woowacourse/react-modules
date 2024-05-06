import React, { useState } from "react";
import { Modal } from "./lib";

const App = () => {
  const portalRoot = document.querySelector("#app") as HTMLElement;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div id="app">
      <button onClick={handleOpen}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
        portalRoot={portalRoot}
      >
        <Modal.Title>제목</Modal.Title>
        <Modal.CloseButton onClick={handleClose}></Modal.CloseButton>
        <div>모달 content</div>
        <Modal.Button
          variant="primary"
          onClick={handleClose}
        >
          동의하고 저장하기
        </Modal.Button>
        <Modal.Button
          variant="secondary"
          onClick={handleClose}
        >
          닫기
        </Modal.Button>
      </Modal>
    </div>
  );
};

export default App;
