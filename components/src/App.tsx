import React from "react";
import { Modal } from "../../components/src/lib/Modal/Modal";
import "./App.css";
import AlertModal from "./lib/AlarmModal/AlarmModal";

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

        <AlertModal title="Alert" size="medium" modalPosition="center" closeButtonPosition="top">
          AlertModal 내용
        </AlertModal>
      </Modal.Provider>
    </>
  );
}

export default App;
