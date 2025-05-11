import './App.css';
import { css } from '@emotion/css';
import useModal from './lib/hooks/useModal';
import { ConfirmModal } from './lib';

function App() {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleAfterOpen = () => {
    console.log('열기 버튼 클릭');
  };

  const ModalContent = () => {
    return (
      <>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
      </>
    );
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button className={OpenButton} onClick={handleOpen}>
        열기
      </button>
      <ConfirmModal isOpen={isOpen} position="center" onAfterOpen={handleAfterOpen} onClose={handleClose} size="large">
        <ConfirmModal.Header title="알림" showCloseButton />
        <ConfirmModal.Body>
          <ModalContent />
        </ConfirmModal.Body>
      </ConfirmModal>
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
