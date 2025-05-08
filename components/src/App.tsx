import { Modal } from "@sooyeoniya/components";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={{ text: "Modal Title" }}
      >
        <div style={{ padding: "20px" }}>
          <p>
            모달 컴포넌트의 children으로 다양한 콘텐츠를 추가할 수 있습니다.
          </p>
          <button onClick={closeModal}>모달 닫기</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
