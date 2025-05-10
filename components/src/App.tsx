import AlertModal from './lib/components/AlertModal';
import ConfirmModal from './lib/components/ConfirmModal';
import { Modal } from './lib/components/Modal';
import PromptModal from './lib/components/PromptModal';
import { useModal } from './lib/hooks/useModal';

function App() {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const {
    isOpen: isOpenAlertModal,
    handleOpenModal: handleOpenAlertModal,
    handleCloseModal: handleCloseAlertModal,
  } = useModal();

  const {
    isOpen: isOpenConfirmModal,
    handleOpenModal: handleOpenConfirmModal,
    handleCloseModal: handleCloseConfirmModal,
  } = useModal();

  const {
    isOpen: isOpenPromptModal,
    handleOpenModal: handleOpenPromptModal,
    handleCloseModal: handleClosePromptModal,
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
      <div>
        <button onClick={handleOpenConfirmModal}>confirm 모달 버튼</button>
        <ConfirmModal
          isOpen={isOpenConfirmModal}
          onClose={handleCloseConfirmModal}
          onConfirm={() => {
            console.log('confirm 확인!');
          }}
          title="카드를 삭제하시겠습니까?"
        >
          <p>삭제하면 복구하실 수 없습니다.</p>
        </ConfirmModal>
      </div>
      <div>
        <button onClick={handleOpenPromptModal}>prompt 모달 버튼</button>
        <PromptModal
          isOpen={isOpenPromptModal}
          onClose={handleClosePromptModal}
          onConfirm={(value) => {
            console.log('prompt 확인!:', value);
          }}
          title="쿠폰 번호를 입력해 주세요."
        />
      </div>
    </>
  );
}

export default App;
