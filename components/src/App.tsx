import { useState } from "react";
import AlertModal from "./lib/AlertModal/AlertModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && (
        <AlertModal
          title="아이디를 입력해 주세요."
          content={<p>아이디는 필수로 입력해야 합니다.</p>}
          hasCloseButton
          position="center"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
