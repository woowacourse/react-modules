import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ModalHeader from '../../lib/components/header/ModalHeader';

const meta = {
  title: 'ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '(required) 모달의 제목을 넣어주어야합니다.',
      control: { type: 'text' },
    },
    onClose: {
      description: '(required) 모달을 닫는 함수를 넣어줘야합니다.',
    },
    style: {
      description:
        '(options) 커스텀한 스타일을 inline으로 넣어줄 수 있습니다. (modalHeader, modalTitle)',
    },
    customCloseIcon: {
      description:
        '(options) 닫기 아이콘을 커스텀해서 넣어줄 수 있습니다. 잘못된 src를 넣을 경우 원래의 이미지가 보이게 됩니다.',
      control: { type: 'text' },
    },
    hideCloseIcon: {
      description: '(options) 닫기 아이콘을 숨길 수 있습니다.',
      control: { type: 'boolean' },
    },
  },
  args: {
    title: '안녕',
    onClose: () => console.log(''),
  },
  render: ({ ...args }) => {
    return <ModalHeader {...args} />;
  },
} satisfies Meta<typeof ModalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
