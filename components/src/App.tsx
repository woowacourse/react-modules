import React, { useState } from 'react';
import { Modal, AlertModal, ConfirmModal, PromptModal } from './lib';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const [value, setValue] = useState('');
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <Modal isOpen={isOpen} position="center" backdropType="blur" size="md" close={() => setIsOpen(false)}>
          <Modal.Header>
            <Modal.Title>제목</Modal.Title>
            <Modal.CloseButton close={() => setIsOpen(false)} />
          </Modal.Header>
          <Modal.Body>
            <p>모달입니다.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button text="확인" mode="primary" size="lg"></Modal.Button>
            <Modal.Button text="닫기" mode="secondary" size="lg" onClick={() => setIsOpen(false)}></Modal.Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <button onClick={() => setIsAlertOpen(true)}>Alert Modal</button>
        <AlertModal
          isOpen={isAlertOpen}
          close={() => setIsAlertOpen(false)}
          headerText="아이디를 입력해 주세요."
          bodyText="아이디는 필수로 입력해야 합니다."
        ></AlertModal>
      </div>
      <div>
        <button onClick={() => setIsConfirmOpen(true)}>Confirm Modal</button>
        <ConfirmModal
          isOpen={isConfirmOpen}
          onConfirm={() => setIsConfirmOpen(false)}
          close={() => setIsConfirmOpen(false)}
          headerText="카드를 삭제하시겠습니까?"
          bodyText="삭제하면 복구하실 수 없습니다"
        ></ConfirmModal>
      </div>
      <div>
        <button onClick={() => setIsPromptOpen(true)}>Prompt Modal</button>
        <PromptModal
          isOpen={isPromptOpen}
          close={() => setIsPromptOpen(false)}
          headerText="쿠폰 번호를 입력해 주세요."
          inputValue={value}
          onInputChange={handleValue}
          onConfirm={() => setIsPromptOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
