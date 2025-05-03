import { useState } from "react";
import "./App.css";
import { Modal } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h1>Component Modules</h1>
      <Modal isOpen={isOpen} onClose={handleClose} title="제목" />
    </>
  );
}

export default App;
