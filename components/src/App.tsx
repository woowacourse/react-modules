import { useState } from "react";
import "./App.css";
import Modal from "./lib/Components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)} id="trigger-button">
        모달창 trigger
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
        <Modal.Background>
          <Modal.Container>
            <Modal.Header>중앙 모달 제목입니다</Modal.Header>
            <Modal.Content>
              <p>중앙 모달 내용 입니다.</p>
            </Modal.Content>
          </Modal.Container>
        </Modal.Background>
      </Modal>
    </>
  );
}

export default App;
