import 'nakta-react-payments-components/dist/style.css';
import React, { useState } from 'react';
import { Modal } from 'nakta-react-payments-components';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return <>{isOpen && <Modal position='center' title='제목' children={<></>} onClose={onClose} isCloseButton={true} />}</>;
}

export default App;
