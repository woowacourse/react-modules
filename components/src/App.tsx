import { useState } from "react";
import { Modal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && (
        <Modal
          title="카드사 선택"
          onClose={() => setIsOpen(false)}
          position="center"
        />
      )}
    </>
  );
}

export default App;
