import {useState} from 'react';
// import {Modal} from '@muffin2219/components';
import {Modal} from './lib';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={{
          text: 'Prompt Modal',
        }}
        prompt
        size="large"
      />
    </>
  );
}

export default App;
