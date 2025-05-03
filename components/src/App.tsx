import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from './modal/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setModalOpen(true)}>열기</button>
      <Modal.Container open={modalOpen} onClose={onClose}>
        <Modal.Title>모달</Modal.Title>
        <Modal.CloseButton onClose={onClose} />

        <div>컨텐츠</div>

        <ButtonWrapper>
          <Modal.PrimaryButton
            label="동의하고 저장하기"
            onClick={() => alert('클릭됨')}
          />
          <Modal.SecondaryButton label="닫기" onClick={onClose} />
        </ButtonWrapper>
      </Modal.Container>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default App;
