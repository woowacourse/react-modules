import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { AppModalContents, ModalTitle } from '../App';
import { ConfirmModal } from '../lib';
import { BASIC_BORDER_RADIUS } from '../lib/constants/modal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Modal',
  component: ConfirmModal,
  argTypes: {
    setOpenModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    title: <ModalTitle>alert modal</ModalTitle>,
    contents: (
      <AppModalContents>
        <p>open</p>
        <p>confirm modal</p>
      </AppModalContents>
    ),
    buttonContainerJustifyContent: 'space-between',
    confirmButton: {
      contents: '확인',
      style: { backgroundColor: 'black', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS },
      extraClickAction: () => alert('확인'),
    },
    cancelButton: {
      contents: '취소',
      style: { backgroundColor: '#ffff', color: 'black', borderRadius: BASIC_BORDER_RADIUS },
    },
  },
};
