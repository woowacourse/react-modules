import { useState } from 'react';
import { Modal } from './lib';
// import { Modal } from 'jurunghappy-modal';
import './App.css';
import AlertModal from './components/AlertModal/AlertModal';
import ConfirmModal from './components/ConfirmModal/ConfirmModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>AlertModal Open</button>
      <ConfirmModal
        isOpen={isOpen}
        position="center"
        size="small"
        onClose={() => setIsOpen(false)}
        onBackdropClick={handleBackdropClick}
      />
    </>
  );
}

export default App;
