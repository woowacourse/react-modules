import { useState } from "react";
import "./App.css";
import Modal from "./lib";

function App() {
  const [alertModal, setAlertModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [promptModal, setPromptModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <button onClick={() => setAlertModal((prev) => !prev)}>확인 모달</button>
      <button onClick={() => setConfirmModal((prev) => !prev)}>
        확인/취소 모달
      </button>
      <button onClick={() => setPromptModal((prev) => !prev)}>입력 모달</button>
      <Modal
        position="center"
        size="sm"
        isOpen={alertModal}
        onClose={() => {
          setAlertModal(false);
        }}
      >
        <Modal.Header>기본 스타일이 적용된 alert 모달</Modal.Header>
        <Modal.Content>
          default로 제공되는 모달 title 사용시 <br />
          close 버튼과 폰트가 적용되어 보입니다
        </Modal.Content>
        <Modal.Footer>
          <Modal.AlertButton
            onClick={() => {
              setAlertModal(false);
            }}
          />
        </Modal.Footer>
      </Modal>
      <Modal
        position="center"
        size="md"
        isOpen={confirmModal}
        onClose={() => {
          setConfirmModal(false);
        }}
      >
        <Modal.Header>기본 스타일이 적용된 confirm 모달</Modal.Header>
        <Modal.Content>확인/취소 옵션을 사용할 수 있습니다</Modal.Content>
        <Modal.Footer>
          <Modal.ConfirmButton
            onConfirm={() => {
              setAlertModal(false);
            }}
            onCancel={() => {
              setAlertModal(false);
            }}
          />
        </Modal.Footer>
      </Modal>
      <Modal
        position="center"
        size="lg"
        isOpen={promptModal}
        onClose={() => {
          setPromptModal(false);
        }}
      >
        <Modal.Header hasCloseButton>
          기본 스타일이 적용된 prompt 모달
        </Modal.Header>
        <Modal.Content>
          <Modal.InputPrompt
            value={inputValue}
            placeholder="placeholder"
            onChange={(e) =>
              setInputValue((e.target as HTMLInputElement).value)
            }
          />
        </Modal.Content>
        <Modal.Footer>
          <Modal.ConfirmButton
            onConfirm={() => {
              setAlertModal(false);
            }}
            onCancel={() => {
              setAlertModal(false);
            }}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
