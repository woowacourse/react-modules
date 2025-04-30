import { Modal } from "happyjurung-modal";
import "./App.css";
import { useState } from "react";
// import "happyjurung-modal/dist/index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <Modal
        isModalOpen={isModalOpen}
        position="center"
        title="카드사 선택"
        onClose={() => setIsModalOpen(false)}
        children="이것은 모달 내용입니다."
      />
    </>
  );
}

export default App;
