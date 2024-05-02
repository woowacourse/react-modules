import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import { Modal, ModalButtonType } from '@seongjinme/react-modal';

function App() {
  const [isOpenCenterModal, setIsOpenCenterModal] = useState(false);
  const [isOpenBottomModal, setIsOpenBottomModal] = useState(false);

  const MODAL_CENTER_BUTTONS: ModalButtonType[] = [
    {
      text: '동의하고 저장하기',
      style: 'primary',
      onClick: () => {
        setIsOpenCenterModal(false);
      },
    },
    {
      text: '닫기',
      style: 'secondary',
      onClick: () => {
        setIsOpenCenterModal(false);
      },
    },
  ];

  const MODAL_BOTTOM_BUTTONS: ModalButtonType[] = [
    {
      text: '동의하고 저장하기',
      style: 'primary',
      onClick: () => {
        setIsOpenBottomModal(false);
      },
    },
    {
      text: '닫기',
      style: 'secondary',
      onClick: () => {
        setIsOpenBottomModal(false);
      },
    },
  ];

  return (
    <>
      <h1>Modal Component Module</h1>
      <p>React 기반의 간단한 모달 컴포넌트입니다.</p>

      <div className="button-container">
        <button onClick={() => setIsOpenCenterModal(true)}>'Center' 타입 모달 열기</button>
        <button onClick={() => setIsOpenBottomModal(true)}>'Bottom' 타입 모달 열기</button>
      </div>

      <Modal
        isOpen={isOpenCenterModal}
        title="Center 타입 모달 컴포넌트"
        position="center"
        hasCloseButton={true}
        footerButtons={MODAL_CENTER_BUTTONS}
        onClose={() => setIsOpenCenterModal(false)}
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

      <Modal
        isOpen={isOpenBottomModal}
        title="Bottom 타입 모달 컴포넌트"
        position="bottom"
        hasCloseButton={true}
        footerButtons={MODAL_BOTTOM_BUTTONS}
        onClose={() => setIsOpenBottomModal(false)}
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
