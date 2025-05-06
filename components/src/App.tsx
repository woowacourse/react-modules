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
      <Modal isOpen={isOpen} onClose={handleClose} autoCloseOnESC={true}>
        <Modal.Backdrop>
          <Modal.Frame>
            <Modal.Title title="제목" />
            <Modal.CloseButton />
            <Modal.Body>
              <div>안녕하세요~</div>
            </Modal.Body>
            <Modal.Button
              variant="primary"
              title="확인"
              size="large"
              onClick={() => {
                console.log("확인 버튼 클릭!");
              }}
            />
            <Modal.Button
              variant="secondary"
              title="확인"
              size="large"
              onClick={() => {
                console.log("확인 버튼 클릭!");
              }}
            />
          </Modal.Frame>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}

export default App;
