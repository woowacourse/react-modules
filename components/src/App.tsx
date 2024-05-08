import React from "react";
import { Modal } from "../../components/src/lib/Modal/Modal";
import "./App.css";

function App() {
  return (
    <>
      <h1>Modal Test</h1>
      <Modal.Provider>
        <Modal.Trigger>열기</Modal.Trigger>
        <Modal.Content modalPosition="center" closeButtonPosition="top">
          <Modal.Header title="모달창 타이틀" containClose />
          <Modal.Body>내용ㅋㅋ</Modal.Body>
          <Modal.Footer>
            <Modal.Close>닫기</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Provider>
    </>
  );
}

export default App;
