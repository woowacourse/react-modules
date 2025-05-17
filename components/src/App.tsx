import './App.css';
import { css } from '@emotion/css';
import Modal from './lib/components/Modal/Modal';
import useModal from './lib/hooks/useModal';

function App() {
  const { isOpen, handleOpen, handleClose } = useModal();

  const handleAfterOpen = () => {
    console.log('모달 열기 버튼 클릭');
  };

  const handleConfirm = () => {
    console.log('확인 버튼 클릭');
    handleClose();
  };

  return (
    <>
      <h1>Modal Component</h1>
      <button className={OpenButton} onClick={handleOpen}>
        열기
      </button>

      <Modal.Prompt
        isOpen={isOpen}
        position="center"
        onAfterOpen={handleAfterOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        size="large"
        title="Prompt"
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
