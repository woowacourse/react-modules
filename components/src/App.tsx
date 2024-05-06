import "./App.css";
import { useState } from "react";
import Modal from "./lib/Modal";

export const CloseContent = () => {
  return <div>모달 닫기</div>;
};

export const Content = () => {
  return <div>모달 컨텐츠</div>;
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
        position="center"
        mountAnimation="modal_enter"
        unMountAnimation="modal_exit"
        animationTime={300}
      >
        <Modal.Portal id="modal">
          <Modal.Backdrop>
            <Modal.Container className="container" style={{}}>
              <Content />
              <Modal.CloseButton>
                <CloseContent />
              </Modal.CloseButton>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal.Portal>
      </Modal>

      <button onClick={handleModalOpen}>모달 열기</button>
    </>
  );
}

export default App;
