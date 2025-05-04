import { useState } from "react";
import { ConfirmModal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && (
        <ConfirmModal
          title="카드사 선택"
          confirmText="카드사 선택 모달입니다."
          size="medium"
          onRequestClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("카드사 선택 모달에서 확인 버튼을 눌렀습니다.");
          }}
        />
      )}
    </>
  );
}

export default App;
