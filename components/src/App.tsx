import './App.css';
import { useState } from 'react';
import { ModalComponent as Modal } from './lib/index.ts';
import Button from './Button';
import Input from './lib/Input';
import ButtonContainer from './ButtonContainer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열림!</button>

      <Modal isOpen={isOpen} position="top" width="large" onClose={onClose}>
        <Modal.Overlay>
          <Modal.Container>
            <Modal.CloseButton />
            <Modal.Title>제목</Modal.Title>
            <Modal.Body>
              내용1! <Input type="text" />
              <ButtonContainer>
                <Button position="left">취소</Button>
                <Button position="right">확인</Button>
              </ButtonContainer>
            </Modal.Body>
          </Modal.Container>
        </Modal.Overlay>
      </Modal>
    </>
  );
}

export default App;
