import { useState } from "react";
import "./App.css";
import { Modal } from "compoents-modal-test-spoy";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>asdfasfdlk</button>
      <Modal
        position="center"
        title="모달 제목"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {<p>모달 내용asdada</p>}
      </Modal>
    </>
  );
}

export default App;
