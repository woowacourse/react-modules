import { useState } from "react";
import "./App.css";
import Modal from "./lib/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        title="테스트"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<p>모달열림</p>}
      />
      <button onClick={() => setIsOpen(true)}>모달 열기 버튼</button>
    </>
  );
}

export default App;
