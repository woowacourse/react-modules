import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from '../PromptModal';

const meta = {
  title: 'PromptModal/modalPosition',
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
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

export const Bottom: Story = {
  args: {
    modalPosition: 'bottom',
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