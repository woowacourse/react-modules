import './App.css';
import { useState } from 'react';
import { Modal } from './lib/index';
import AlertModal from './lib/components/AlertModal/AlertModal';
import ConfirmModal from './lib/components/ConfirmModal/ConfirmModal';
import PromptModal from './lib/components/PromptModal/PromptModal';

function App() {
  return (
    <>
      <Modal>
        <Modal.Trigger>어럴트 트리거</Modal.Trigger>
        <AlertModal size="small" title="어럴트제목" content="내용1234" />{' '}
      </Modal>

      <Modal>
        <Modal.Trigger>컨펌 트리거</Modal.Trigger>
        <ConfirmModal size="small" title="컨펌제목" content="내용1234내용" />
      </Modal>

      <Modal>
        <Modal.Trigger>프롬프터 트리거</Modal.Trigger>
        <PromptModal size="small" title="컨펌제목" content="내용1234내용" />
      </Modal>

      <Modal>
        <Modal.Trigger>모달 트리거</Modal.Trigger>
        <Modal.Container>
          <Modal.Overlay />
          <Modal.Content position="center" size="small">
            <Modal.CloseButton />
            <Modal.Title>제목</Modal.Title>
            <Modal.Body>내용2</Modal.Body>
          </Modal.Content>
        </Modal.Container>
      </Modal>
    </>
  );
}

export default App;
