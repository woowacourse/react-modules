import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';

const meta = {
  title: 'Base/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {},
    isOpen: {
      control: 'boolean',
      description: 'modal의 여는 상태',
    },
    onToggle: {
      description: 'modal을 열고 닫기 위한 핸들러 함수',
    },
  },
  args: {
    onToggle: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="app">
        <Modal {...args}>모달 </Modal>
      </div>
    );
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '모달의 기본 상태',
      },
    },
  },
  args: {
    isOpen: true,
  },
};
