import { useState } from "react";
import PromptModal from "./lib/PromprtModal/PromptModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleConfirm = () => {
    alert("확인되었습니다.");
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>PromptModal</button>
      {isOpen && (
        <PromptModal
          title="아이디를 입력해 주세요."
          hasCloseButton
          position="center"
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}

export default App;
