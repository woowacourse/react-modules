import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PromptModal from './PromptModal';

import {
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from '../Modal/Modal.constant';

const meta = {
  title: 'Modal/PromptModal',
  component: PromptModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    position: {
      control: 'radio',
      options: Object.keys(MODAL_POSITION_CLASS_NAME_MAP),
    },
    size: {
      control: 'radio',
      options: Object.keys(MODAL_SIZE_CLASS_NAME_MAP),
    },
    cancelButtonText: {
      control: 'text',
    },
    confirmButtonText: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    device: {
      control: 'radio',
      options: Object.keys(MODAL_DEVICE_CLASS_NAME_MAP),
    },
  },
  args: {
    onToggle: fn(),
    onChange: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="mobile">
        <PromptModal {...args} />
      </div>
    );
  },
} satisfies Meta<typeof PromptModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    title: '쿠폰 번호를 입력해 주세요.',
    isOpen: true,
    position: 'center',
    size: 'small',
  },
};

export const Tablet: Story = {
  render: ({ ...args }) => {
    return (
      <div className="tablet">
        <PromptModal {...args}>
          <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
        </PromptModal>
      </div>
    );
  },

  args: { ...Mobile.args, size: 'medium', device: 'tablet' },
};

export const Desktop: Story = {
  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <PromptModal {...args}>
          <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
        </PromptModal>
      </div>
    );
  },

  args: { ...Mobile.args, size: 'medium', device: 'desktop' },
};
