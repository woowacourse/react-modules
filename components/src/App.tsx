import { useState } from "react";
import Modal, { ModalType } from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("alert");
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    console.log("확인 버튼 클릭", inputValue);
    handleClose();
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => {
            setModalType("alert");
            setIsOpen(true);
          }}
        >
          Alert 모달 열기
        </button>
        <button
          onClick={() => {
            setModalType("confirm");
            setIsOpen(true);
          }}
        >
          Confirm 모달 열기
        </button>
        <button
          onClick={() => {
            setModalType("prompt");
            setIsOpen(true);
          }}
        >
          Prompt 모달 열기
        </button>
      </div>

      {isOpen && (
        <Modal onClose={handleClose} modalType={modalType} modalSize="medium">
          <Modal.Header>
            <Modal.Title>
              {modalType === "alert"
                ? "아이디를 입력해주세요"
                : modalType === "confirm"
                  ? "카드를 삭제하시겠습니다?"
                  : "쿠폰번호를 입력해주세요"}
            </Modal.Title>
            <Modal.CloseButton onClick={handleClose} />
          </Modal.Header>

          <Modal.Content>
            {modalType === "alert" && <p>아이디는 필수로 입력해야합니다.</p>}
            {modalType === "confirm" && <p>삭제하면 복구하실 수 없습니다.</p>}
            {modalType === "prompt" && (
              <Modal.Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            )}
          </Modal.Content>

          <Modal.Footer>
            {(modalType === "confirm" || modalType === "prompt") && (
              <Modal.Button onClick={handleClose}>취소</Modal.Button>
            )}
            <Modal.Button primary onClick={handleConfirm}>
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default App;
