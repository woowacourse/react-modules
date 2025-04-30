import { useState } from "react";
import { Modal } from "bunju-summit-modal";
function App() {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal
        isOpen={isOpen}
        title="카드사 선택"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default App;
