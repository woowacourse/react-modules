import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../Modal';

const meta = {
  title: 'Modal/size',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
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

export const Medium: Story = {
  args: {
    size: 'medium',
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

export const Large: Story = {
  args: {
    size: 'large',
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
