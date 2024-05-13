import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../lib/index';
import React from 'react';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: '(required) 모달의 열린 상태입니다.',
      control: { type: 'boolean' },
    },
    onClose: {
      description: '(required) 모달을 닫는 함수를 넣어줘야합니다.',
    },
    type: {
      description:
        '(required) 모달의 타입을 설정할 수 있습니다. dialog, drawer, drawer-top, drawer-right, drawer-left를 골라서 선택할 수 있습니다.',
      control: { type: 'radio' },
      options: ['dialog', 'drawer', 'drawer-top', 'drawer-right', 'drawer-left'],
    },
    dialogSize: {
      description: '(options) dialog modal의 size를 조절할 수 있습니다. default는 large입니다.',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    style: {
      description: '(options) 커스텀한 스타일을 inline으로 넣어줄 수 있습니다. (dimmed, modal)',
    },
    closeOnOutsideClick: {
      description:
        '(options) 모달 외부 영역을 클릭했을 때 모달이 꺼지는 기능을 on off할 수 있습니다. default는 true',
      control: { type: 'boolean' },
    },
    closeOnESCKeydown: {
      description:
        '(options) esc를 눌렀을 때 모달이 꺼지는 기능을 on off할 수 있습니다. default는 false',
      control: { type: 'boolean' },
    },
    children: {
      description:
        '(options): 모달의 헤더와 컨텐츠 푸터를 선택해서 넣어줄 수 있습니다. (Modal.Header, Modal.Content, Modal.Footer)',
    },
  },
  args: {
    open: false,
    onClose: () => console.log(''),
    type: 'dialog',
  },
  render: ({ ...args }) => {
    return <Modal {...args} />;
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
