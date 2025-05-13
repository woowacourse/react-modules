import styled from '@emotion/styled';
import './App.css';
import { useState } from 'react';
import React from 'react';
import Modal from './lib/modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1>My App</h1>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title='타이틀입니다'
        message='메세지입니다'
        type='prompt'
        onConfirm={() => {}}
        size='large'
        // onSubmit={(input) => {
        // }}
      />
      {/* <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Modal> */}
      <OpenModal onClick={() => setIsOpen(!isOpen)}>모달 켜지는 버튼</OpenModal>
    </div>
  );
}

const OpenModal = styled.button`
  width: 100px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default App;
