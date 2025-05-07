import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import styled from '@emotion/styled';

const meta = {
  title: 'ModalContainer',
  component: Modal.Container,
} satisfies Meta<typeof Modal.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal.Container {...args} onClose={onClose} open={modalOpen}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <div>컨텐츠</div>
        </Modal.Container>
      </>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    open: true,
    onClose: () => {},
    position: 'bottom',
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal.Container {...args} onClose={onClose} open={modalOpen}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <div>컨텐츠</div>
        </Modal.Container>
      </>
    );
  },
};

export const ShowCloseButton: Story = {
  args: {
    open: true,
    onClose: () => {},
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <h1>Component Modules</h1>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal.Container {...args} onClose={onClose} open={modalOpen}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <Modal.CloseButton onClose={onClose} />
          <div>컨텐츠</div>
        </Modal.Container>
      </>
    );
  },
};

export const ShowAllButtons: Story = {
  args: {
    open: true,
    onClose: () => {},
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal.Container {...args} onClose={onClose} open={modalOpen}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
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
  },
};

export const Prompt: Story = {
  args: {
    open: true,
    onClose: () => {},
  },

  render: function App(args) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClose = () => {
      setModalOpen(false);
    };

    return (
      <>
        <button onClick={() => setModalOpen(true)}>열기</button>
        <Modal.Container {...args} onClose={onClose} open={modalOpen}>
          <Modal.Title>쿠폰 번호를 입력해 주세요.</Modal.Title>
          <Modal.Input />
          <PromptButtonWrapper>
            <Modal.SecondaryButton label="취소" onClick={onClose} />
            <Modal.PrimaryButton
              label="확인"
              onClick={() => alert('확인 클릭')}
            />
          </PromptButtonWrapper>
        </Modal.Container>
      </>
    );
  },
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PromptButtonWrapper = styled.div`
  width: 50%;
  margin-left: auto;

  display: flex;
  gap: 12px;
`;
