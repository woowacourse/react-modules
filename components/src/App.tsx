import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import React from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Title title="제목" />
        <Modal.CloseButton />
        <Modal.Contents>
          <div>안녕하세요~</div>
        </Modal.Contents>
        <Modal.Button
          title="확인"
          backgroundColor="#007bff"
          textColor="#ffffff"
          size="large"
          onClick={() => {
            console.log("확인 버튼 클릭!");
          }}
        />
      </Modal>
    </>
  );
}

export default App;
