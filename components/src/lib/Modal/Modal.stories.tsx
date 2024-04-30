import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from './Modal';

import { MODAL_POSITION_MAP } from './Modal.constant';

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
    position: {
      control: 'radio',
      options: Object.values(MODAL_POSITION_MAP),
      description: '모달의 위치',
      table: {
        type: { summary: 'ModalPosition' },
      },
    },
  },
  args: {
    onToggle: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="app">
        <Modal {...args}>모달</Modal>
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
    position: 'center',
  },
};

export const Bottom: Story = {
  parameters: {
    docs: {
      description: {
        story: '모달의 기본 상태',
      },
    },
  },
  args: {
    isOpen: true,
    position: 'bottom',
  },
};
