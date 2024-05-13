import React from 'react';
import { useState } from 'react';
import './App.css';
import { Modal } from 'vwh-wtc-lv2-payments-modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);

  const onConfirm = (formValues: Record<string, string>) => {
    Object.entries(formValues).forEach(([key, value]) => {
      console.log(key + ' : ' + value);
    });
  };

  return (
    <h1 style={{ marginBottom: '20px' }}>Hooks Module</h1>
  );
}

export default App;
