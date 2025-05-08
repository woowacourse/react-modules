import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';
import Button from './lib/Button';
import Input from './lib/Input';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.ModalContainer isOpen={isOpen} position="top" width="large">
          <Modal.ModalCloseButton onClose={onClose} />
          <Modal.ModalTitle>제목</Modal.ModalTitle>
          <Modal.ModalBody>
            내용1! <Input type="text" onChange={onChange}></Input> <Button position="right">확인</Button>
          </Modal.ModalBody>
        </Modal.ModalContainer>
      </Modal>
    </>
  );
}

export default App;
