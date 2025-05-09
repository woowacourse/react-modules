import { useState } from "react";
import "./App.css";
import Modal from "./lib";

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
        position="center"
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <Modal.Header>기본 스타일이 적용된 모달 헤더</Modal.Header>
        <Modal.Content>
          default로 제공되는 모달 title 사용시 <br />
          close 버튼과 폰트가 적용되어 보입니다
        </Modal.Content>
        <Modal.Footer>모달 하단 내용</Modal.Footer>
      </Modal>
      <Modal
        position="center"
        isOpen={titleModalOpen}
        onClose={() => {
          setTitleModalOpen(false);
        }}
      >
        <header>커스텀으로 제작한 모달 헤더</header>
        <Modal.Content>
          <p>
            또는 renderHeader() 함수를 통해 <br /> 원하는 헤더 속성을 적용시킬
            수 있습니다
          </p>
        </Modal.Content>
        <Modal.Footer>모달 하단 내용</Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
