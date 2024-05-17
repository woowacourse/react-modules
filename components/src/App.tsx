import "soosoo-react-modal-component/dist/style.css";
import { Modal, AlertModal, ConfirmModal, PromptModal } from "soosoo-react-modal-component";
import React, { useState } from "react";
// import Modal from "./lib/Modal/Modal";
// import AlertModal from "./lib/Modal/AlertModal/AlertModal";
// import ConfirmModal from "./lib/Modal/ConfirmModal/ConfirmModal";
// import PromptModal from "./lib/Modal/PromptModal/PromptModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  const modalFooterButtons = [
    {
      content: "동의하고 저장하기",
      onClick: () => setIsOpen(false),
      className: "confirmButton",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{ background: "green", width: "200px", height: "100px" }}
      >
        모달 오픈
      </button>
      <button
        onClick={() => setIsAlertModalOpen(true)}
        style={{ background: "olive", width: "200px", height: "100px" }}
      >
        Alert 모달 오픈
      </button>
      <button
        onClick={() => setIsConfirmModalOpen(true)}
        style={{ background: "darkkhaki", width: "200px", height: "100px" }}
      >
        Confirm 모달 오픈
      </button>
      <button
        onClick={() => setIsPromptModalOpen(true)}
        style={{ background: "beige", width: "200px", height: "100px" }}
      >
        Prompt 모달 오픈
      </button>

      <Modal
        position="center"
        size="large"
        title={{ position: "left", content: "🍀호프는 몇 살일까?🍀" }}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeButton={{ onClose: () => setIsOpen(false) }}
        footerButtons={modalFooterButtons}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "15px",
          }}
        >
          <div>
            <input type="checkbox" id="20" />
            <label htmlFor="20" style={{ marginLeft: "5px" }}>
              20살^^
            </label>
          </div>
          <div>
            <input type="checkbox" id="29" />
            <label htmlFor="29" style={{ marginLeft: "5px" }}>
              29살
            </label>
          </div>
          <div>
            <input type="checkbox" id="30" />
            <label htmlFor="30" style={{ marginLeft: "5px" }}>
              30살
            </label>
          </div>
          <div>
            <input type="checkbox" id="31" />
            <label htmlFor="31" style={{ marginLeft: "5px" }}>
              31살
            </label>
          </div>
        </div>
      </Modal>

      <AlertModal
        position="center"
        size="medium"
        title={{ position: "left", content: "🍀호프의 나이를 입력해 주세요.🍀" }}
        isOpen={isAlertModalOpen}
        confirmButton={{ content: "", onConfirm: () => setIsAlertModalOpen(false) }}
      >
        나이는 필수로 입력해야 합니다.
      </AlertModal>

      <ConfirmModal
        position="center"
        size="medium"
        title={{ position: "left", content: "🍀호프를 삭제하시겠습니까?🍀" }}
        isOpen={isConfirmModalOpen}
        confirmButton={{ content: "", onConfirm: () => setIsConfirmModalOpen(false) }}
        cancelButton={{ content: "", onCancel: () => setIsConfirmModalOpen(false) }}
      >
        삭제하면 복구하실 수 없습니다.
      </ConfirmModal>

      <PromptModal
        position="center"
        size="medium"
        title={{ position: "left", content: "🍀호프 번호를 입력해 주세요.🍀" }}
        isOpen={isPromptModalOpen}
        confirmButton={{ content: "", onConfirm: () => setIsPromptModalOpen(false) }}
        cancelButton={{ content: "", onCancel: () => setIsPromptModalOpen(false) }}
      />
    </>
  );
}

export default App;
