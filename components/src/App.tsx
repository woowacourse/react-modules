import { Modal, useModal } from '@sinjuk1/modal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>
      <Modal isOpen={isOpen} title="모달 제목" showCloseButton onClose={handleCloseModal}>
        <h1>안녕</h1>
      </Modal>
    </>
  );
}

export default App;
