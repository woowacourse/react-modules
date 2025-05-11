import Modal from "./lib/Modal";
import { useState } from "react";
import React from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal isOpen={isOpen} onModalClose={handleCloseModal}>
        <Modal.Background onClick={handleCloseModal} />
        <Modal.ModalContainer $position="center" $size="large">
          <Modal.ModalFocusTrap>
            <Modal.Title>접근성 테스트</Modal.Title>
            <Modal.ModalContent>
              <input type="text" placeholder="이름" />
              <button>확인</button>
            </Modal.ModalContent>
          </Modal.ModalFocusTrap>
        </Modal.ModalContainer>
      </Modal>
    </>
  );
}

export default App;
