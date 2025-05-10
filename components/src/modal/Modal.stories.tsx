import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import styled from '@emotion/styled';

const meta = {
  title: 'ModalContainer',
  component: Modal.Container,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'inline-radio',
      options: ['center', 'bottom'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    position: 'center',
    size: 'medium',
  },
} satisfies Meta<typeof Modal.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function App(args) {
    return (
      <Modal>
        <h1>Component Modules</h1>
        <Modal.ButtonTrigger>
          <button>열기</button>
        </Modal.ButtonTrigger>
        <Modal.Container {...args}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const BottomPosition: Story = {
  args: {
    position: 'bottom',
  },

  render: function App(args) {
    return (
      <Modal>
        <h1>Component Modules</h1>
        <Modal.ButtonTrigger>
          <button>열기</button>
        </Modal.ButtonTrigger>
        <Modal.Container {...args}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const ShowCloseButton: Story = {
  render: function App(args) {
    return (
      <Modal>
        <h1>Component Modules</h1>
        <Modal.ButtonTrigger>
          <button>열기</button>
        </Modal.ButtonTrigger>
        <Modal.Container {...args}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
          <Modal.CloseButton />
          <div>컨텐츠</div>
        </Modal.Container>
      </Modal>
    );
  },
};

export const ShowAllButtons: Story = {
  render: function App(args) {
    return (
      <Modal>
        <h1>Component Modules</h1>{' '}
        <Modal.ButtonTrigger>
          <button>열기</button>
        </Modal.ButtonTrigger>
        <Modal.Container {...args}>
          <Modal.Title>약관에 동의해 주세요</Modal.Title>
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
  },
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
