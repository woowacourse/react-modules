import './App.css';
import { css } from '@emotion/css';
import Modal from './lib/Modal';
import useModal from './lib/hooks/useModal';

function App() {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleConfirm = () => {
    alert('동의하고 저장하기 버튼 클릭');
    handleClose();
  };

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

  const ModalActions = () => {
    return (
      <div className={ButtonBar}>
        <button className={CancelButton} onClick={handleClose}>
          닫기
        </button>
        <button className={ConfirmButton} onClick={handleConfirm}>
          동의하고 저장하기
        </button>
      </div>
    );
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button className={OpenButton} onClick={handleOpen}>
        열기
      </button>
      <Modal isOpen={isOpen} position="center" onAfterOpen={handleAfterOpen} onClose={handleClose}>
        <Modal.Header title="알림" showCloseButton />
        <Modal.Body>
          <ModalContent />
        </Modal.Body>
        <Modal.Actions>
          <ModalActions />
        </Modal.Actions>
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

const ButtonBar = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
