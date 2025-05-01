import { useState } from 'react';
import './App.css';
// import { Modal } from 'seo-meta-react-modal';
import Modal from './lib/Modal';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleButtonToggle}>모달 열기</button>
      {isOpen && (
        <Modal onClose={handleButtonToggle}>
          <Modal.BackDrop backgroundColor={'rgba(0,0,255,0.35)'} onClose={handleButtonToggle} />
          <Modal.Content position="center" style={{ width: '300px', height: '300px', backgroundColor: 'white' }}>
            <Modal.Title>하이</Modal.Title>
            <Modal.CloseButton style={{ position: 'absolute', right: '24px', top: '24px' }} onClick={handleButtonToggle}>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
                  fill="black"
                />
              </svg>
            </Modal.CloseButton>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
}

export default App;
