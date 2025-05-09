import { Modal } from './lib/components/Modal';
import { useModal } from './lib/hooks/useModal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>버튼</button>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <Modal.Backdrop />
        <Modal.Container>
          <Modal.Header title="모달 제목" showCloseButton />
          <h1>안녕</h1>
        </Modal.Container>
      </Modal>
    </>
  );
}

export default App;
