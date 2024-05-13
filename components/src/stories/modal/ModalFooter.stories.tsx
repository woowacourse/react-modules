import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ModalFooter from '../../lib/components/footer/ModalFooter';

const meta = {
  title: 'ModalFooter',
  component: ModalFooter,
  tags: ['autodocs'],
  argTypes: {
    style: {
      description: '(options) 커스텀한 스타일을 inline으로 넣어줄 수 있습니다. (footer)',
    },
    buttonPosition: {
      description: '(options) 확인, 취소 버튼의 위치를 설정할 수 있습니다.',
      control: { type: 'radio' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    closeButton: {
      description: '(options) 닫기 버튼을 설정할 수 있습니다.',
    },
    confirmButton: {
      description: '(options) 확인 버튼을 설정할 수 있습니다.',
    },
  },
  args: {},
  render: ({ ...args }) => {
    return <ModalFooter {...args} />;
  },
} satisfies Meta<typeof ModalFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
