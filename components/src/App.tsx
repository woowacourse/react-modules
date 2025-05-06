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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleConfirm = () => {
    console.log('확인 버튼이 클릭되었습니다.')
  };

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      {isOpen && (
        <Modal
          onClose={handleCloseModal}
          title="제목"
          position="center"
          content="내용"
          hasCloseButton={true}
          handleBackdropClick={handleBackdropClick}
          confirmText="확인"
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}

export default App;
