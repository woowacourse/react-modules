import { Modal, useModal } from '@sebin0580/react-modules';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>
      <Modal
        isOpen={isOpen}
        title="모달 제목"
        showCloseButton
        onClose={handleCloseModal}
        onOutsideClick={handleOutsideClick}
      >
        <h1>안녕</h1>
      </Modal>
    </>
  );
}

export default App;
