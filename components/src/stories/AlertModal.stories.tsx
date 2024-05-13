/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlertModal } from '../lib';

const meta = {
  title: 'AlertModal',
  component: AlertModal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultModal = ({ ...args }) => {
  return (
    <AlertModal
      isOpen={args.isOpen}
      title="AlertModal 제목입니다."
      content="AlertModal content 입니다."
      isAnimation
      animationDuration={300}
      buttonLabel="테스트"
      {...args}
    />
  );
};

export const Confirm_모달_위치: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
  },
  render: args => <DefaultModal {...args} />,
};

export const Confirm_모달_타이틀_변경: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '제목 변경!',
  },
  render: args => <DefaultModal {...args} />,
};
