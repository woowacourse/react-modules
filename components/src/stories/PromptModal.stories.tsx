/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PromptModal } from '../lib';

const meta = {
  title: 'PromptModal',
  component: PromptModal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultModal = ({ ...args }) => {
  return (
    <PromptModal
      isOpen={args.isOpen}
      title="PromptModal 제목입니다."
      content="PromptModal content 입니다."
      isAnimation
      animationDuration={300}
      closeButtonLabel="취소"
      confirmButtonLabel="확인"
      value=""
      onChange={() => {}}
      {...args}
    />
  );
};

export const Prompt_모달_위치: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    value: '',
    onChange: () => {},
  },
  render: args => <DefaultModal {...args} />,
};

export const Prompt_모달_타이틀_변경: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '제목 변경!',
    value: '',
    onChange: () => {},
  },
  render: args => <DefaultModal {...args} />,
};
