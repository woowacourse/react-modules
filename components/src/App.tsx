import "./App.css";
import { Modal } from "./lib/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <Modal
        isModalOpen={isModalOpen}
        position="bottom"
        title="카드사 선택"
        onClose={() => setIsModalOpen(false)}
        children="이것은 모달 내용입니다."
      />
    </>
  );
}

export default App;
