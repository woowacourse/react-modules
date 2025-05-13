import { useState } from "react";
import { PromptModal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && (
        <PromptModal
          title="카드사 선택"
          size="medium"
          onRequestClose={() => setIsOpen(false)}
          onSubmit={(value) => {
            alert(value);
          }}
        />
      )}
    </>
  );
}

export default App;
