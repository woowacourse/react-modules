import { useState } from "react";
import "./App.css";
import Modal from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={() => setIsOpen(true)}>모달 열기 버튼</button>
    </>
  );
}

export default App;
