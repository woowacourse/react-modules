import React from "react";
import { Modal } from "../../components/src/lib/Modal/Modal";
import "./App.css";
import { AlertModal } from "./lib/AlarmModal/AlarmModal";
import { ConfirmModal } from "./lib/ConfirmModal/ConfirmModal";
import { PromptModal } from "./lib/PromptModal/PromptModal";

function App() {
  return (
    <>
      <h1>Modal Test</h1>
      <Modal.Provider>
        <Modal.Trigger>Modal 열기</Modal.Trigger>
        <Modal.Content modalPosition="center" closeButtonPosition="bottom" size="small">
          <Modal.Header title="모달창 타이틀" containClose />
          <Modal.Body>내용</Modal.Body>
          <Modal.Footer align="center">
            <Modal.Close>닫기</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Provider>

      {/* AlertModal */}
      <Modal.Provider>
        <Modal.Trigger>AlertModal 열기</Modal.Trigger>

        <AlertModal title="Alert" size="small" modalPosition="center" closeButtonPosition="top">
          AlertModal 내용
        </AlertModal>
      </Modal.Provider>

      {/* PromptModal */}
      <Modal.Provider>
        <Modal.Trigger>PromptModal 열기</Modal.Trigger>

        <PromptModal title="Prompt" size="medium" modalPosition="center" closeButtonPosition="top">
          PromptModal 내용
        </PromptModal>
      </Modal.Provider>

      {/* ConfirmModal */}
      <Modal.Provider>
        <Modal.Trigger>ConfirmModal 열기</Modal.Trigger>

        <ConfirmModal title="Confirm" size="small" modalPosition="center" closeButtonPosition="top">
          ConfirmModal 내용
        </ConfirmModal>
      </Modal.Provider>
    </>
  );
}

export default App;
