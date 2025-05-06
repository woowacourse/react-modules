import { Modal } from "compoents-modal-test-kangoll";
import { useState } from "react";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [titleModalOpen, setTitleModalOpen] = useState(true);

  return (
    <>
      <button onClick={() => setModalOpen((prev) => !prev)}>
        모달 trigger 버튼
      </button>
      <button onClick={() => setTitleModalOpen((prev) => !prev)}>
        커스텀 제목을 사용한 모달 trigger 버튼
      </button>
      <Modal
        id="modal-component"
        position="center"
        title="모달 제목"
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <p>
          default로 제공되는 모달 title 사용시 <br />
          close 버튼과 폰트가 적용되어 보입니다
        </p>
      </Modal>
      <Modal
        id="modal-component"
        position="center"
        renderHeader={() => {
          return <header>자체 제작된 모달 헤더입니다</header>;
        }}
        isOpen={titleModalOpen}
        onClose={() => {
          setTitleModalOpen(false);
        }}
      >
        <p>
          또는 renderHeader() 함수를 통해 <br /> 원하는 헤더 속성을 적용시킬 수
          있습니다
        </p>
      </Modal>
    </>
  );
}

export default App;
