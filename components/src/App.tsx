import React from "react";
import "./App.css";
// import "../Modal.css";
import Modal from "./lib/Modal";
import { useState } from "react";

type TestProps = {
  handleModalClose: () => void;
};

const customStyles = {
  width: "1000px",
  height: "50px",
  margin: "auto",
  borderRadius: "8px",
};

const Test = ({ handleModalClose }: TestProps) => {
  return (
    <div>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
      <button onClick={handleModalClose}>모달 닫기</button>
    </div>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button onClick={handleModalOpen}>모달 열기</button>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalClose}
        title="약관에 동의해 주세요"
        position="center"
        modalContainerStyle={customStyles}
        content={<Test handleModalClose={handleModalClose} />}
      />
    </>
  );
}

export default App;
