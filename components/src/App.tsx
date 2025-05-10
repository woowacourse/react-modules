import styled from '@emotion/styled';
import Modal from './modal/Modal';

function App() {
  return (
    <Modal>
      <h1>Component Modules</h1>
      <Modal.ButtonTrigger>
        <button>열기</button>
      </Modal.ButtonTrigger>
      <Modal.Container>
        <Modal.Title>모달</Modal.Title>
        <Modal.CloseButton />

        <div>컨텐츠</div>

        <ButtonWrapper>
          <Modal.PrimaryButton
            label="동의하고 저장하기"
            onClick={() => alert('클릭됨')}
          />
          <Modal.SecondaryButton label="닫기" onClick={() => {}} />
        </ButtonWrapper>
      </Modal.Container>
    </Modal>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default App;
