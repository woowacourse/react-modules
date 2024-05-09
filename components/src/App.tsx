import { useState } from 'react';
import './App.css';
// import { Modal } from "./lib";
import Modal from './lib/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);

  const onConfirm = (formValues: Record<string, string>) => {
    Object.entries(formValues).forEach(([key, value]) => {
      console.log(key + ' : ' + value);
    });
  };

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>Component Modules</h1>
      <button type='button' onClick={openModal}>
        모달 열기
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type='prompt'
        size='medium'
        title='Modal Title'
        description='Modal Description'
        placeholder='Enter Text'
        confirmLabel='Confirm'
        cancelLabel='Cancel'
        onConfirm={onConfirm}
      ></Modal>
    </>
  );
}

export default App;
