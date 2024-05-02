import './App.css';

import { Modal, ModalButtonType } from '@cys4585/react-modal';
import React, { useState } from 'react';

import styled from 'styled-components';

const buttons: ModalButtonType[] = [
  {
    text: '동의하고 저장하기',
    style: 'primary',
    onClick: () => alert('동의하고 저장하기 버튼을 눌렀어요!'),
  },
  {
    text: '닫기',
    style: 'secondary',
    onClick: () => alert('닫기 버튼을 눌렀어요!'),
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setIsOpen(true)}>Click me!</button>

      <Modal
        isOpen={isOpen}
        title="모달 컴포넌트 테스트"
        position="bottom"
        hasCloseButton={true}
        footerButtons={buttons}
        onClose={() => setIsOpen(false)}
      >
        <Form>
          <InputCheckBox>
            <input
              name="checkbox-1"
              type="checkbox"
              value=""
            />
            <label htmlFor="checkbox-1">[필수] 개인정보 수집이용 동의</label>
          </InputCheckBox>
          <InputCheckBox>
            <input
              name="checkbox-2"
              type="checkbox"
              value=""
            />
            <label htmlFor="checkbox-2">[필수] 고객정보 제 3자 제공 동의</label>
          </InputCheckBox>
        </Form>
      </Modal>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputCheckBox = styled.div`
  margin-bottom: 4px;
  text-align: left;
`;

export default App;
