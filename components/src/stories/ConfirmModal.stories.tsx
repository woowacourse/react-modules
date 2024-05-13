/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ConfirmModal } from '../lib';

const meta = {
  title: 'ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultModal = ({ ...args }) => {
  return (
    <ConfirmModal
      isOpen={args.isOpen}
      title="ConfirmModal 제목입니다."
      content="ConfirmModal content 입니다."
      isAnimation
      animationDuration={300}
      closeButtonLabel="취소"
      confirmButtonLabel="확인"
      {...args}
    />
  );
};

export const Alert_모달_위치: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
  },
  render: args => <DefaultModal {...args} />,
};

export const Alert_모달_타이틀_변경: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '제목 변경!',
  },
  render: args => <DefaultModal {...args} />,
};
