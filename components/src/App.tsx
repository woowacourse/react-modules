import { useState } from "react";
import { Modal } from "./lib";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && (
        <Modal onClose={handleClose} position="center">
          <Modal.Header>
            <Modal.Title>카드사 선택</Modal.Title>
            <Modal.CloseButton onClick={handleClose} />
          </Modal.Header>
          <Modal.Content></Modal.Content>
        </Modal>
      )}
    </>
  );
}

export default App;
