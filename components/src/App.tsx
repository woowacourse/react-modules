import './App.css';
import { css } from '@emotion/css';
import Modal from './lib/components/Modal/Modal';
import useModal from './lib/hooks/useModal';

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
      <Modal
        isOpen={isOpen}
        position="center"
        onAfterOpen={handleAfterOpen}
        onClose={handleClose}
        type="prompt"
        size="large"
      >
        <Modal.Header title="알림" showCloseButton />
        <Modal.Body>
          <ModalContent />
        </Modal.Body>
      </Modal>
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
