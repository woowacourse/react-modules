import AlertModal from "./lib/AlertModal/AlertModal";
import "./styles/reset.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <AlertModal
        isModalOpen={isModalOpen}
        title="아이디를 입력해 주세요."
        description="아이디는 필수로 입력해야 합니다."
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
