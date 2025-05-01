import './App.css';
import { css } from '@emotion/css';
import { Modal, useModal } from '@sanghee01/modal';

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
      <div>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
        <p>모달 내용입니다.</p>
      </div>
    );
  };

  const ModalActions = () => {
    return (
      <>
        <button className={CancelButton} onClick={handleClose}>
          닫기
        </button>
        <button className={ConfirmButton} onClick={handleConfirm}>
          동의하고 저장하기
        </button>
      </>
    );
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button className={OpenButton} onClick={handleOpen}>
        열기
      </button>
      <Modal isOpen={isOpen} position="center" title="알림" onAfterOpen={handleAfterOpen} onClose={handleClose}>
        <ModalContent />
        <ModalActions />
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
