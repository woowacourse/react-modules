import { useState } from "react";
import { AlertModal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && (
        <AlertModal
          title="카드사 선택"
          alertText="카드사 선택 모달입니다."
          onRequestClose={() => setIsOpen(false)}
          size="medium"
        />
      )}
    </>
  );
}

export default App;
