import { useState } from "react";
import { Modal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("확인 버튼이 클릭되었습니다.");
  };

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && (
        <Modal
          // size="medium"
          type="confirm"
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}

export default App;
