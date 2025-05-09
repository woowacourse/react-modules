import AlertModal from './lib/components/AlertModal';
import { Modal } from './lib/components/Modal';
import { useModal } from './lib/hooks/useModal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const {
    isOpen: isOpenAlertModal,
    handleOpenModal: handleOpenAlertModal,
    handleCloseModal: handleCloseAlertModal,
  } = useModal();

  return (
    <>
      <div>
        <button onClick={handleOpenModal}>기본 모달 버튼</button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <Modal.Backdrop />
          <Modal.Container>
            <Modal.Title title="모달 제목" />
            <Modal.CloseButton />
            <h1>안녕</h1>
          </Modal.Container>
        </Modal>
      </div>
      <div>
        <button onClick={handleOpenAlertModal}>alert 모달 버튼</button>
        <AlertModal
          isOpen={isOpenAlertModal}
          onClose={handleCloseAlertModal}
          onConfirm={() => {
            console.log('alert 확인!');
            handleCloseAlertModal();
          }}
          title="아이디를 입력해 주세요."
        >
          <p>아이디는 필수로 입력해야 합니다.</p>
        </AlertModal>
      </div>
    </>
  );
}

export default App;
