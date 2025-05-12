import { useState } from "react";
import Modal from "./lib/Modal/Modal";
import AlertModal from "./lib/ModalVariants/AlertModal";
import ConfirmModal from "./lib/ModalVariants/ConfirmModal";
import PromptModal from "./lib/ModalVariants/PromptModal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const [promptIsOpen, setpromptIsOpen] = useState(false);

  function handleModalClose() {
    setModalIsOpen(false);
  }
  function handleAlertClose() {
    setAlertIsOpen(false);
  }
  function handleConfirmClose() {
    setConfirmIsOpen(false);
  }
  function handlePromptClose() {
    setpromptIsOpen(false);
  }

  function handleModalConfirm() {
    alert("확인");
    setModalIsOpen(false);
  }
  function handleAlertConfirm() {
    alert("확인");
    setAlertIsOpen(false);
  }
  function handleConfirmConfirm() {
    alert("확인");
    setConfirmIsOpen(false);
  }
  function handlePromptConfirm(value: string) {
    alert(value);
    setpromptIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        position="center"
        size="large"
      >
        <Modal.Header>테스트 제목</Modal.Header>
        <Modal.Body>
          <p>모달열림</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.SecondaryButton>취소</Modal.SecondaryButton>
          <Modal.PrimaryButton>확인</Modal.PrimaryButton>
        </Modal.Footer>
      </Modal>
      <AlertModal
        isOpen={alertIsOpen}
        onClose={handleAlertClose}
        onConfirm={handleAlertConfirm}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
      />
      <ConfirmModal
        isOpen={confirmIsOpen}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmConfirm}
        title="카드를 삭제하시겠습니까?"
        content="삭제하면 복구하실 수 없습니다."
        size="medium"
      />
      <PromptModal
        isOpen={promptIsOpen}
        onClose={handlePromptClose}
        onConfirm={handlePromptConfirm}
        title="쿠폰 번호를 입력해 주세요."
      />

      <button onClick={() => setModalIsOpen(true)}>모달 열기 버튼</button>
      <button onClick={() => setAlertIsOpen(true)}>Alert 모달 열기 버튼</button>
      <button onClick={() => setConfirmIsOpen(true)}>
        Confirm 모달 열기 버튼
      </button>
      <button onClick={() => setpromptIsOpen(true)}>
        Prompt 모달 열기 버튼
      </button>
    </>
  );
}

export default App;
