import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './../../lib/components/footer/button/Button';

const meta = {
  title: 'ButtonProps',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    role: {
      description: '(required): 확인 버튼인지, 닫기 버튼인지 넣어주어야합니다.',
      control: { type: 'radio' },
      options: ['confirm', 'close'],
    },
    text: {
      description: '(options): 버튼의 텍스트를 넣어줄 수 있습니다.',
      control: { type: 'text' },
    },
    style: {
      description: '(options) 커스텀한 스타일을 inline으로 넣어줄 수 있습니다. (button)',
    },
    customButton: {
      description: '(options): 직접 커스텀한 버튼을 넣어줄 수 있습니다.',
    },
    hide: {
      description: '(options): 버튼을 숨길 수 있습니다. default: false',
      control: { type: 'boolean' },
    },
  },
  args: {
    role: 'close',
  },
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
