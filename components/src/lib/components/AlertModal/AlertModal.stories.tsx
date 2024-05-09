import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AlertModal from './AlertModal';

import {
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from '../Modal/Modal.constant';

const meta = {
  title: 'Modal/AlertModal',
  component: AlertModal,
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
    confirmButtonText: {
      control: 'text',
    },
    device: {
      control: 'radio',
      options: Object.keys(MODAL_DEVICE_CLASS_NAME_MAP),
    },
  },

  args: {
    onToggle: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="mobile">
        <AlertModal {...args} />
      </div>
    );
  },
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    contentLabel: '아이디는 필수로 입력해야 합니다.',
    title: '아이디를 입력해주세요.',
    isOpen: true,
    position: 'center',
    size: 'small',
  },
};

export const Tablet: Story = {
  render: ({ ...args }) => {
    return (
      <div className="tablet">
        <AlertModal {...args} />
      </div>
    );
  },
  args: { ...Mobile.args, size: 'medium', device: 'tablet' },
};

export const Desktop: Story = {
  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <AlertModal {...args} />
      </div>
    );
  },

  args: { ...Mobile.args, size: 'large', device: 'desktop' },
};
