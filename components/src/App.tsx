import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';
import { css } from '@emotion/css';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    console.log('모달이 열렸습니다.');
  };

  const handleClose = () => {
    console.log('모달이 닫혔습니다.');
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log('모달이 확인되었습니다.');
    setIsOpen(false);
  };

  const actionDefs = [
    { label: '닫기', style: CancelButton, onClick: handleClose },
    { label: '동의하고 저장하기', style: ConfirmButton, onClick: handleConfirm },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열기</button>
      {isOpen && (
        <Modal
          position="center"
          title="알림"
          content="모달 내용"
          actions={actionDefs}
          onClose={handleClose}
          onOpen={handleOpen}
        />
      )}
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
