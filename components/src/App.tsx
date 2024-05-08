import './App.css';
import Modal from './lib/Modal/Modal';
import { useState } from 'react';
import GlobalStyles from './style/global.ts';
import DeleteIcon from './assets/deleteIcon.svg?react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [input, setInput] = useState('');

  const handleConfirm = () => {
    setIsModalOpen(false);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <GlobalStyles />
      <h1>Component Modules</h1>
      <button onClick={handleOpen}>버튼</button>
      <Modal
        isOpen={isModalOpen}
        position="center"
        size="large"
        onClose={handleClose}
      >
        <Modal.Title> 약관에 동의해 주세요</Modal.Title>
        <Modal.CloseIcon onClick={handleClose}>
          <DeleteIcon />
        </Modal.CloseIcon>
        <Modal.Content>
          [필수] 개인정보 수집약관 동의
          <Modal.PromptInput
            value={input}
            placeholder="이름을 입력해주세요"
            onChange={(e) => setInput(e.target.value)}
          />
        </Modal.Content>
        <Modal.ConfirmButton
          label="동의"
          size="small"
          onConfirm={handleConfirm}
        />
        <Modal.CloseButton label="닫기" size="small" onClose={handleClose} />
      </Modal>
    </>
  );
}

export default App;
