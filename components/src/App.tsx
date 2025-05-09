import AlertModal from "./lib/AlertModal/AlertModal";
import ConfirmModal from "./lib/ConfirmModal/ConfirmModal";
import PromptModal from "./lib/PromptModal/PromptModal";
import "./styles/reset.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  return (
    <>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => setIsAlertModalOpen(true)}>
          AlertModal Open
        </button>
        <button onClick={() => setIsConfirmModalOpen(true)}>
          ConfirmModal Open
        </button>
        <button onClick={() => setIsPromptModalOpen(true)}>
          PromptModal Open
        </button>
      </div>
      <AlertModal
        isModalOpen={isAlertModalOpen}
        title="아이디를 입력해 주세요."
        description="아이디는 필수로 입력해야 합니다."
        onClose={() => setIsAlertModalOpen(false)}
      />
      <ConfirmModal
        isModalOpen={isConfirmModalOpen}
        title="카드를 삭제하시겠습니까?"
        description="삭제하면 복구하실 수 없습니다."
        onClose={() => setIsConfirmModalOpen(false)}
      />
      <PromptModal
        isModalOpen={isPromptModalOpen}
        title="쿠폰 번호를 입력해 주세요."
        inputValue={couponCode}
        onChangeInput={(e) => setCouponCode(e.target.value)}
        onClose={() => setIsPromptModalOpen(false)}
      />
    </>
  );
}

export default App;
