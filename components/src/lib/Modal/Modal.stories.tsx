import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',
    primaryButton: {
      text: '확인',
      onClick: () => {
        alert('확인');
      },
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {
        alert('취소');
      },
    },
  },
};

export const CloseButton: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',
    primaryButton: {
      text: '확인',
      onClick: () => {
        alert('확인');
      },
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {
        alert('취소');
      },
    },
    showCloseButton: true,
  },
};

export const Bottom: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',
    modalPosition: 'bottom',
    primaryButton: {
      text: '확인',
      onClick: () => {
        alert('확인');
      },
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {
        alert('취소');
      },
    },
  },
};

export const Column: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',
    modalPosition: 'bottom',
    primaryButton: {
      text: '확인',
      onClick: () => {
        alert('확인');
      },
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {
        alert('취소');
      },
    },
    buttonPosition: 'column',
  },
};

export const Color: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',
    modalPosition: 'bottom',
    primaryButton: {
      text: '확인',
      onClick: () => {
        alert('확인');
      },
    },
    secondaryButton: {
      text: '취소',
      onClick: () => {
        alert('취소');
      },
    },
    buttonPosition: 'column',
    primaryColor: '#f66f00',
  },
};
