import React from 'react';
import './App.css';
import { Modal } from './lib/index';

function App() {
  return (
    <>
      <h1>Component Modules</h1>
      <Modal position="center" title="카드사 선택" closeOption="icon">
        <div></div>
      </Modal>
    </>
  );
}

export default App;
