import { useState } from "react";
import Modal from "./lib/Modal/Modal";
import AlertModal from "./lib/ModalVariants/AlertModal";
import ConfirmModal from "./lib/ModalVariants/ConfirmModal";
import PromptModal from "./lib/ModalVariants/PromptModal";
import styled from "@emotion/styled";

function App() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [AlertIsOpen, setAlertIsOpen] = useState(false);
  const [ConfirmIsOpen, setConfirmIsOpen] = useState(false);
  const [PromptIsOpen, setpromptIsOpen] = useState(false);

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
  function handlePromptConfirm() {
    alert("확인");
    setpromptIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={ModalIsOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        position="center"
      >
        <Modal.Header>테스트 제목</Modal.Header>
        <Modal.Body>
          <p>모달열림</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.PrimaryButton>취소</Modal.PrimaryButton>
          <Modal.SecondaryButton>확인</Modal.SecondaryButton>
        </Modal.Footer>
      </Modal>
      <AlertModal
        isOpen={AlertIsOpen}
        onClose={handleAlertClose}
        onConfirm={handleAlertConfirm}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
      />
      <ConfirmModal
        isOpen={ConfirmIsOpen}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmConfirm}
        title="카드를 삭제하시겠습니까?"
        content="삭제하면 복구하실 수 없습니다."
      />
      <PromptModal
        isOpen={PromptIsOpen}
        onClose={handlePromptClose}
        onConfirm={handlePromptConfirm}
        title="카드를 삭제하시겠습니까?"
        content={<Input />}
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

const Input = styled.input`
  height: 32px;
`;
