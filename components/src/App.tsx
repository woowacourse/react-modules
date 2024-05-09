import React from "react";
import { Modal } from "../../components/src/lib/Modal/Modal";
import "./App.css";

function App() {
  return (
    <>
      <h1>Modal Test</h1>
      <Modal.Provider>
        <Modal.Trigger>열기</Modal.Trigger>
        <Modal.Content modalPosition="center" closeButtonPosition="bottom" size="small">
          <Modal.Header title="모달창 타이틀" containClose />
          <Modal.Body>내용ㅋㅋ</Modal.Body>
          <Modal.Footer align="center">
            <Modal.Close>닫기</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Provider>

      <Modal.Provider>
        <Modal.Trigger> prompt 열기</Modal.Trigger>
        <Modal.Prompt
          title="쿠폰 번호를 입력해 주세요."
          modalPosition="center"
          closeButtonPosition="top"
          placeholder="CGEXX46Z"
          onSubmit={(value) => console.log("input value : ", value)}
          size="medium"
        ></Modal.Prompt>
      </Modal.Provider>

      <Modal.Provider>
        <Modal.Trigger> alert 열기</Modal.Trigger>
        <Modal.Alert
          title="아이디를 입력해 주세요."
          modalPosition="center"
          closeButtonPosition="top"
          size="small"
        >
          아이디는 필수로 입력해야 합니다.
        </Modal.Alert>
      </Modal.Provider>

      <Modal.Provider>
        <Modal.Trigger> confirm 열기</Modal.Trigger>
        <Modal.Confirm
          title="카드를 삭제하시겠습니까?"
          modalPosition="center"
          closeButtonPosition="top"
          size="medium"
        >
          삭제하면 복구하실 수 없습니다.
        </Modal.Confirm>
      </Modal.Provider>
    </>
  );
}

export default App;
