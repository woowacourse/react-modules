import { useState } from 'react';
// import { Modal } from './lib';
// import { Modal } from 'jurunghappy-modal';
import './App.css';
import { PromptModal } from 'jurunghappy-modal';
// import AlertModal from './lib/components/AlertModal/AlertModal';
// import ConfirmModal from './lib/components/ConfirmModal/ConfirmModal';
// import PromptModal from './lib/components/PromptModal/PromptModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Modal Open</button>
      <PromptModal
        isOpen={isOpen}
        position="center"
        size="large"
        title="타이틀"
        value={input}
        onClose={() => setIsOpen(false)}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onBackdropClick={handleBackdropClick}
      />
    </>
  );
}

export default App;
