import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Button/disabled',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: '버튼',
    onClick: () => {
      alert('버튼 클릭');
    },
    disabled: true,
  },
};

export const Border: Story = {
  args: {
    text: '버튼',
    onClick: () => {
      alert('버튼 클릭');
    },
    buttonStyle: 'border',
    disabled: true,
  },
};

export const Text: Story = {
  args: {
    text: '버튼',
    onClick: () => {
      alert('버튼 클릭');
    },
    buttonStyle: 'text',
    disabled: true,
  },
};
