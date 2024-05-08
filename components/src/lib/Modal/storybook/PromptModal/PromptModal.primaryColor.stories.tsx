import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../../PromptModal';

const meta = {
  title: 'PromptModal/primaryColor',
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

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

    onConfirm: (value: string) => {
      alert(`${value} 전달됨`)
    },
    placeholder: 'placeholder',
  },
};

export const Bright: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',

    onConfirm: (value: string) => {
      alert(`${value} 전달됨`)
    },
    placeholder: 'placeholder',
    primaryColor: '#ffd09e',
  },
};

export const Dark: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    description: '설명입니다',

    onConfirm: (value: string) => {
      alert(`${value} 전달됨`)
    },
    placeholder: 'placeholder',
    primaryColor: '#0076d0',
  },
};
