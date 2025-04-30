import { useState } from "react";
import "./App.css";
// import { Modal } from "./lib";
import { Modal } from "@sooyeoniya/components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        테스트 열기 버튼
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        Default Contents
      </Modal>
    </>
  );
}

export default App;
