import './App.css';
import { css } from '@emotion/css';
import Modal from './lib/components/Modal';
import useModal from './lib/hooks/useModal';
import AlertModal from './lib/components/AlertModal';
import ConfirmModal from './lib/components/ConfirmModal';
import PromptModal from './lib/components/PromptModal';

function App() {
  const {
    isOpen: isOpenDefaultModal,
    handleOpen: handleOpenDefaultModal,
    handleClose: handleCloseDefaultModal,
  } = useModal();
  const { isOpen: isOpenAlertModal, handleOpen: handleOpenAlertModal, handleClose: handleCloseAlertModal } = useModal();
  const {
    isOpen: isOpenConfirmModal,
    handleOpen: handleOpenConfirmModal,
    handleClose: handleCloseConfirmModal,
  } = useModal();
  const {
    isOpen: isOpenPromptModal,
    handleOpen: handleOpenPromptModal,
    handleClose: handleClosePromptModal,
  } = useModal();

  const handleAfterOpenModal = () => {
    console.log('기본 모달 열기 버튼 클릭');
  };

  const handleConfirmDefaultModal = () => {
    alert('기본 모달 동의하고 저장하기 버튼 클릭');
    handleCloseDefaultModal();
  };

  const handleConfirmAlertModal = () => {
    alert('Alert 모달 확인 버튼 클릭');
    handleCloseAlertModal();
  };

  const handleConfirmPromptModal = (inputValue: string) => {
    alert(`Prompt 모달 확인 버튼 클릭, 입력값: ${inputValue}`);
    handleClosePromptModal();
  };

  const handleConfirmConfirmModal = () => {
    alert('Confirm 모달 확인 버튼 클릭');
    handleCloseConfirmModal();
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button className={OpenButton} onClick={handleOpenDefaultModal}>
        기본 모달 열기
      </button>
      <button className={OpenButton} onClick={handleOpenAlertModal}>
        Alert 모달 열기
      </button>
      <button className={OpenButton} onClick={handleOpenConfirmModal}>
        Confirm 모달 열기
      </button>
      <button className={OpenButton} onClick={handleOpenPromptModal}>
        Prompt 모달 열기
      </button>
      <Modal
        isOpen={isOpenDefaultModal}
        onClose={handleCloseDefaultModal}
        onAfterOpen={handleAfterOpenModal}
        position="center"
        size="medium"
      >
        <Modal.Header title="기본 모달" />
        <Modal.Content>
          <div>기본 모달 내용</div>
        </Modal.Content>
        <Modal.Footer>
          <button className={CancelButton} onClick={handleCloseDefaultModal}>
            닫기
          </button>
          <button className={ConfirmButton} onClick={handleConfirmDefaultModal}>
            동의하고 저장하기
          </button>
        </Modal.Footer>
      </Modal>
      <AlertModal
        isOpen={isOpenAlertModal}
        onClose={handleCloseAlertModal}
        onAfterOpen={handleAfterOpenModal}
        onConfirm={handleConfirmAlertModal}
        title="Alert 모달 제목"
        content={
          <>
            <div>Alert 모달 내용입니다.</div>
            <div>Alert 모달 내용입니다2.</div>
          </>
        }
        position="center"
        size="medium"
      />
      <ConfirmModal
        isOpen={isOpenConfirmModal}
        onClose={handleCloseConfirmModal}
        onAfterOpen={handleAfterOpenModal}
        onConfirm={handleConfirmConfirmModal}
        onCancel={handleCloseConfirmModal}
        title="Confirm 모달 제목"
        content={<div>Confirm 모달 내용입니다.</div>}
        position="center"
        size="small"
      />
      <PromptModal
        isOpen={isOpenPromptModal}
        onClose={handleClosePromptModal}
        onAfterOpen={handleAfterOpenModal}
        onConfirm={handleConfirmPromptModal}
        onCancel={handleClosePromptModal}
        title="Prompt 모달 제목"
        content={<div>Prompt 모달 내용입니다.</div>}
        position="center"
        placeholder="내용을 입력하세요."
        size="large"
      />
    </>
  );
}

export default App;

const Button = css`
  all: unset;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const OpenButton = css`
  ${Button}
  margin-top: 20px;
`;

const ConfirmButton = css`
  ${Button}
  background-color: #333333;
  color: white;
`;

const CancelButton = css`
  ${Button}
  background-color: white;
  color: #8b95a1;
`;
