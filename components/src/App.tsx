import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 오픈</button>
      <Modal isOpen={isOpen}>
        <>
          <Modal.BackDrop onClose={closeModal} />
          <Modal.Container size="large" position="center">
            <>
              <Modal.Header>
                <>
                  <Modal.Title text="카드사 선택" />
                  <Modal.CloseButton onCloseButtonClick={closeModal} />
                </>
              </Modal.Header>

              <Modal.ButtonContainer direction="row" position="right">
                <>
                  <Modal.Button color="dark" size="small" onClick={closeModal}>
                    <span>동의</span>
                  </Modal.Button>
                  <Modal.Button color="light" size="small" onClick={closeModal}>
                    <span>닫기</span>
                  </Modal.Button>
                </>
              </Modal.ButtonContainer>
            </>
          </Modal.Container>
        </>
      </Modal>
    </>
  );
}

export default App;
