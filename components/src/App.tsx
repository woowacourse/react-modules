import Modal from "./lib/Modal";
import { useState } from "react";
import React from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <Modal.Background onClick={handleCloseModal}>
          <Modal.ModalContainer
            $position="center"
            onClick={(e) => e.stopPropagation()}
          >
            <Modal.HeaderSection>
              <Modal.Title>모달 타이틀</Modal.Title>
              <Modal.ModalCloseButton onClick={handleCloseModal}>
                <img src="./closeIcon.png" />
              </Modal.ModalCloseButton>
            </Modal.HeaderSection>
            <Modal.ModalContent>
              <p>모달 내용입니다.</p>
            </Modal.ModalContent>
          </Modal.ModalContainer>
        </Modal.Background>
      </Modal>
    </>
  );
};

export default App;
