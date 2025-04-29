import { Modal } from './components/Modal';
import { useModal } from './hooks/useModal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onOutsideClick={handleOutsideClick}
        title="모달 제목"
        showCloseButton
      >
        <h1>안녕</h1>
      </Modal>
    </>
  );
}

export default App;
