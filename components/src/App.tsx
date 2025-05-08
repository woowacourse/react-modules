import { useState } from "react";
import Modal from "./lib/Modal";
import AlertModal from "./lib/modals/AlertModal";
import ConfirmModal from "./lib/modals/ConfirmModal";

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
      {/* <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        position="center"
        primaryButton={true}
        secondaryButton={true}
        primaryButtonText="취소"
        secondaryButtonText="확인"
      >
        <Modal.Header>테스트 제목</Modal.Header>
        <Modal.Body>
          <p>모달열림</p>
        </Modal.Body>
        <Modal.Footer />
      </Modal> */}
      {/* <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
      /> */}
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="카드를 삭제하시겠습니까?"
        content="삭제하면 복구하실 수 없습니다."
      />

      <button onClick={() => setIsOpen(true)}>모달 열기 버튼</button>
    </>
  );
}

export default App;
