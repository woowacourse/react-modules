import './App.css';

import Modal from './lib/Modal/Modal';
import React from 'react';
import { Reset } from 'styled-reset';

function App() {
  return (
    <>
      <Reset />
      <Modal isOpened={true} closeModal={() => {}} />
    </>
  );
}

export default App;
