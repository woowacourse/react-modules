import { useState } from 'react';
import { AlertModal, ConfirmModal, Modal, PromptModal } from '@seo_dev/react-modal';

function App() {
  const [isOpen, setIsOpen] = useState({
    base: false,
    alert: false,
    confirm: false,
    prompt: false
  });

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setIsOpen({ ...isOpen, base: !isOpen.base })}>Base 모달 열기</button>
        <button onClick={() => setIsOpen({ ...isOpen, alert: !isOpen.alert })}>Alert 모달 열기</button>
        <button onClick={() => setIsOpen({ ...isOpen, confirm: !isOpen.confirm })}>Confirm 모달 열기</button>
        <button onClick={() => setIsOpen({ ...isOpen, prompt: !isOpen.prompt })}>Prompt 모달 열기</button>
      </div>
      {isOpen.base && (
        <Modal onClose={() => setIsOpen({ ...isOpen, base: !isOpen.base })}>
          <Modal.BackDrop backgroundColor={'rgba(0,0,255,0.35)'} />
          <Modal.Content position="center" style={{ width: '300px', height: '300px', backgroundColor: 'white' }}>
            <Modal.Title>하이</Modal.Title>
            <Modal.CloseButton style={{ position: 'absolute', right: '24px', top: '24px' }}>
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
      {isOpen.alert && (
        <AlertModal
          title="아이디를 입력해 주세요."
          description="아이디는 필수로 입력해야 합니다."
          onClose={() => setIsOpen({ ...isOpen, alert: !isOpen.alert })}
          onConfirmButtonClick={() => setIsOpen({ ...isOpen, alert: !isOpen.alert })}
          size="small"
        />
      )}
      {isOpen.confirm && (
        <ConfirmModal
          title="카드를 삭제하시겠습니까?"
          description="삭제하면 복구하실 수 없습니다."
          onClose={() => setIsOpen({ ...isOpen, confirm: !isOpen.confirm })}
          onConfirmButtonClick={() => setIsOpen({ ...isOpen, confirm: !isOpen.confirm })}
        />
      )}
      {isOpen.prompt && (
        <PromptModal
          title="쿠폰 번호를 입력해 주세요."
          onClose={() => setIsOpen({ ...isOpen, prompt: !isOpen.prompt })}
          onPromptButtonClick={() => setIsOpen({ ...isOpen, prompt: !isOpen.prompt })}
        />
      )}
    </>
  );
}

export default App;
