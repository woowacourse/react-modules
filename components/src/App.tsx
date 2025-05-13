import styled from '@emotion/styled';
import { useState } from 'react';
import { PresetModal } from './lib';

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

      <PresetModal.Alert
        title="아이디를 입력해 주세요."
        onClose={onAlertClose}
        open={alertModalOpen}
        handlePrimaryButtonClick={() => alert('확인 클릭')}
      >
        <div>아이디는 필수로 입력해야 합니다.</div>
      </PresetModal.Alert>

      <PresetModal.Confirm
        title="카드를 삭제하시겠습니까?"
        onClose={onConfirmClose}
        open={confirmModalOpen}
        handlePrimaryButtonClick={() => alert('확인 클릭')}
      >
        <div>삭제하면 복구하실 수 없습니다.</div>
      </PresetModal.Confirm>

      <PresetModal.Prompt
        title="쿠폰 번호를 입력해 주세요."
        onClose={onPromptClose}
        open={promptModalOpen}
        handlePrimaryButtonClick={() => alert('확인 클릭')}
      />
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
