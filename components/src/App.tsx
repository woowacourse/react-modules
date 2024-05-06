// import 'nakta-react-payments-components/dist/style.css';
// import { Modal } from 'nakta-react-payments-components';
import React, { useState } from 'react';
import Modal from './lib/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: '100vw', height: '300vh' }}>
      <button onClick={onClick}>modal open</button>
      {isOpen && (
        <Modal position='center' title='제목' onClose={onClose} existCloseButton={true}>
          <div>test</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
