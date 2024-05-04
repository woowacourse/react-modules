import React from "react";
import "./App.css";
import { useState } from "react";
import { Modal } from "chlwlstlf-modal";

type ContentProps = {
  handleModalClose: () => void;
};

const customStyles = {
  margin: "auto",
  borderRadius: "8px",
  padding: "24px 32px",
};

export const Content = ({ handleModalClose }: ContentProps) => {
  return (
    <div>
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
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        title="약관에 동의해 주세요"
        position="bottom"
        modalContainerStyle={customStyles}
        content={<Content handleModalClose={handleModalClose} />}
      />

      <button onClick={handleModalOpen}>모달 열기</button>
    </>
  );
}

export default App;
