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
        title="테스트"
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        primaryButton={true}
        secondaryButton={true}
        primaryButtonText="동의하고 저장하기"
        secondaryButtonText="닫기"
      >
        <p>모달열림</p>
      </Modal>
      <button onClick={() => setIsOpen(true)}>모달 열기 버튼</button>
    </>
  );
}

export default App;
