import { useState } from "react";
import Modal from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleConfirm() {
    alert("확인");
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        primaryButton={true}
        secondaryButton={true}
        primaryButtonText="동의하고 저장하기"
        secondaryButtonText="닫기"
      >
        <Modal.Header>테스트 제목</Modal.Header>
        <Modal.Body>
          <p>모달열림</p>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
      <button onClick={() => setIsOpen(true)}>모달 열기 버튼</button>
    </>
  );
}

export default App;
