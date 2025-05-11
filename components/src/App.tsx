import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from './modal/Modal';

function App() {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  const onAlertClose = () => {
    setAlertModalOpen(false);
  };

  const onConfirmClose = () => {
    setConfirmModalOpen(false);
  };

  const onPromptClose = () => {
    setPromptModalOpen(false);
  };

  return (
    <>
      <OpenModalButtonContainer>
        <OpenModalButton onClick={() => setAlertModalOpen(true)}>
          Alert 모달 열기
        </OpenModalButton>
        <OpenModalButton onClick={() => setConfirmModalOpen(true)}>
          Confirm 모달 열기
        </OpenModalButton>
        <OpenModalButton onClick={() => setPromptModalOpen(true)}>
          Prompt 모달 열기
        </OpenModalButton>
      </OpenModalButtonContainer>

      <Modal.Container onClose={onAlertClose} open={alertModalOpen}>
        <Modal.Title>아이디를 입력해 주세요.</Modal.Title>
        <div>아이디는 필수로 입력해야 합니다.</div>
        <AlertButtonWrapper>
          <Modal.PrimaryButton
            label="확인"
            onClick={() => alert('확인 클릭')}
          />
        </AlertButtonWrapper>
      </Modal.Container>

      <Modal.Container onClose={onConfirmClose} open={confirmModalOpen}>
        <Modal.Title>카드를 삭제하시겠습니까?</Modal.Title>
        <div>삭제하면 복구하실 수 없습니다.</div>
        <ButtonRowWrapper>
          <Modal.SecondaryButton label="취소" onClick={onConfirmClose} />
          <Modal.PrimaryButton
            label="확인"
            onClick={() => alert('확인 클릭')}
          />
        </ButtonRowWrapper>
      </Modal.Container>

      <Modal.Container onClose={onPromptClose} open={promptModalOpen}>
        <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
        <Modal.Input />
        <ButtonRowWrapper>
          <Modal.SecondaryButton label="취소" onClick={onPromptClose} />
          <Modal.PrimaryButton
            label="확인"
            onClick={() => alert('확인 클릭')}
          />
        </ButtonRowWrapper>
      </Modal.Container>
    </>
  );
}

const OpenModalButtonContainer = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OpenModalButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #333333;
  color: white;
  border-radius: 4px;
`;

const AlertButtonWrapper = styled.div`
  width: 80px;
  margin-left: auto;
`;

const ButtonRowWrapper = styled.div`
  width: 160px;
  margin-left: auto;

  display: flex;
  gap: 12px;
`;

export default App;
