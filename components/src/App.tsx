import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { AlertModal, ConfirmModal, Modal, PromptModal } from '@jaymyong66/simple-modal';
// import { AlertModal, ConfirmModal, Modal, PromptModal } from './lib/index';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleSubmit = (value: string) => console.log(value);
  return (
    <div className="app">
      <div>
        <button onClick={handleToggle}>zz</button>
      </div>
      {/* <Modal position="center" size="medium" isOpen={isOpen} onToggle={handleToggle}>
        <Modal.ModalHeader title="카드사 선택">
          <Modal.ModalCloseButton onClick={handleToggle} />
        </Modal.ModalHeader>
        <Modal.ModalContent>
          <div style={{ height: '100px', width: '100px' }}>zz</div>
        </Modal.ModalContent>
        <Modal.ModalFooter style={{ backgroundColor: 'red' }}>
          <Modal.ModalButton variant="primary" onClick={handleToggle}>
            확인
          </Modal.ModalButton>
        </Modal.ModalFooter>
      </Modal> */}
      <PromptModal
        position="bottom"
        size="medium"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="쿠폰 번호를 입력해 주세요."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <AlertModal
        position="center"
        size="small"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="쿠폰 번호를 입력해 주세요."
        caption="아이디를 입력해주세요."
      /> */}
      {/* <ConfirmModal
        position="center"
        size="small"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="쿠폰 번호를 입력해 주세요."
        caption="아이디를 입력해주세요."
      /> */}
    </div>
  );
}
export default App;
