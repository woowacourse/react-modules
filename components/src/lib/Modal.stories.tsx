import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'bottom'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
      name: 'content',
    },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Center: Story = {
  args: {
    position: 'center',
    title: '기본 모달',
    children: '모달 내용입니다.',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    title: '하단 모달',
    children: '하단 모달 내용입니다.',
  },
};
