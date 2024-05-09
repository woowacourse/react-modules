import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ConfirmModal from './ConfirmModal';

import {
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from '../Modal/Modal.constant';

const meta = {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    position: {
      control: 'radio',
      options: Object.keys(MODAL_POSITION_CLASS_NAME_MAP),
    },
    size: {
      control: 'radio',
      options: Object.keys(MODAL_SIZE_CLASS_NAME_MAP),
    },
    device: {
      control: 'radio',
      options: Object.keys(MODAL_DEVICE_CLASS_NAME_MAP),
    },
    cancelButtonText: { control: 'text' },
    confirmButtonText: { control: 'text' },
  },
  args: {
    onToggle: fn(),
    onConfirm: fn(),
  },

  render: ({ ...args }) => {
    return (
      <div className="mobile">
        <ConfirmModal {...args}>
          <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
        </ConfirmModal>
      </div>
    );
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: {
    title: '카드를 삭제하시겠습니까?',
    isOpen: true,
    position: 'center',
    size: 'small',
  },
};

export const Tablet: Story = {
  render: ({ ...args }) => {
    return (
      <div className="tablet">
        <ConfirmModal {...args}>
          <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
        </ConfirmModal>
      </div>
    );
  },
  args: {
    ...Mobile.args,
    size: 'medium',
    device: 'tablet',
  },
};

export const Desktop: Story = {
  render: ({ ...args }) => {
    return (
      <div className="desktop">
        <ConfirmModal {...args}>
          <p style={{ fontSize: '12px', fontWeight: '500', lineHeight: '16px' }}>삭제하면 복구하실 수 없습니다.</p>
        </ConfirmModal>
      </div>
    );
  },
  args: {
    ...Mobile.args,
    size: 'large',
    device: 'desktop',
  },
};
