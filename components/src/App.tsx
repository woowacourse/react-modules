import React, { ChangeEvent, useState } from 'react';
import { AlertModal, ConfirmModal, Modal, PromptModal } from './lib';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onModalClose = () => setIsModalOpen(false);
  const onAlertModalClose = () => setIsAlertModalOpen(false);
  const onConfirmModalClose = () => setIsConfirmModalOpen(false);
  const onPromptModalClose = () => setIsPromptModalOpen(false);

  const onConfirmTrue = () => true;
  const onConfirmFalse = () => false;

  return (
    <div style={{ height: '300vh', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <button style={{ border: '1px solid black', padding: '10px 20px' }} onClick={() => setIsModalOpen(true)}>
        Modal open
      </button>

      <button style={{ border: '1px solid black', padding: '10px 20px' }} onClick={() => setIsAlertModalOpen(true)}>
        Alert Modal open
      </button>

      <button style={{ border: '1px solid black', padding: '10px 20px' }} onClick={() => setIsConfirmModalOpen(true)}>
        Confirm Modal open
      </button>

      <button style={{ border: '1px solid black', padding: '10px 20px' }} onClick={() => setIsPromptModalOpen(true)}>
        Prompt Modal open
      </button>

      <Modal position='center' isOpen={isModalOpen} onClose={onModalClose}>
        <Modal.Backdrop onClick={onModalClose} />
        <Modal.Content size='medium'>
          <Modal.Header>
            <Modal.Title>제목</Modal.Title>
            <Modal.CloseButton onClick={onModalClose} />
          </Modal.Header>
          <Modal.Main>
            <Modal.Label color='lightGray'>추가설명</Modal.Label>
            <Modal.Input type='text' description='input coupon' id='coupon' placeholder='쿠폰을 입력해주세요.' value={value} onChange={onChange} />
          </Modal.Main>
          <Modal.Footer align='row' position='right'>
            <Modal.Button backgroundColor='secondary' onClick={onModalClose} size='small'>
              취소
            </Modal.Button>
            <Modal.Button backgroundColor='primary' onClick={onModalClose} size='small'>
              확인
            </Modal.Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <AlertModal
        position='center'
        existCloseButton={true}
        label='Alert Modal'
        title='Alert Modal'
        isOpen={isAlertModalOpen}
        onClose={onAlertModalClose}
        onConfirm={onConfirmTrue}
      />

      <ConfirmModal
        position='center'
        existCloseButton={true}
        label='Confirm Modal'
        title='Confirm Modal'
        isOpen={isConfirmModalOpen}
        onClose={onConfirmModalClose}
        onConfirm={onConfirmTrue}
      />

      <PromptModal
        size='large'
        existCloseButton={true}
        onConfirm={onConfirmFalse}
        isOpen={isPromptModalOpen}
        onClose={onPromptModalClose}
        position='center'
        title='쿠폰번호를 입력해 주세요.'
      >
        <Modal.Input description='coupon' value={value} onChange={onChange} name='coupon' />
      </PromptModal>
    </div>
  );
}

export default App;
