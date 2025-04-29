import { useState } from "react";
import { Modal } from "bunju-summit-modal";
import "../dist/bunju-summit-modal.css";

function App() {
  //TODO : 상태관리 측면에서 같은 관심사끼리 응집
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal
        isOpen={isOpen}
        title="카드사 선택"
        onClose={() => setIsOpen(false)}
        position="center"
      />
    </>
  );
}

export default App;
