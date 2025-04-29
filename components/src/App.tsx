import React from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Modal Open</button>
      <Modal title="카드사 선택" isModalOpen={isModalOpen} />
    </>
  );
}

export default App;
