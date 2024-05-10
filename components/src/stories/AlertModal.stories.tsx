import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';
import { ModalContents, ModalTitle } from '../App';
import { AlertModal } from '../lib';
import { BASIC_BORDER_RADIUS } from '../lib/constants/modal';

const meta: Meta<typeof AlertModal> = {
  title: 'Modal',
  component: AlertModal,
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

export const AlertModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    title: <ModalTitle>alert modal</ModalTitle>,
    contents: (
      <ModalContents>
        <p>open</p>
        <p>alert modal</p>
      </ModalContents>
    ),
    buttonContainerJustifyContent: 'right',
    buttonStyle: { backgroundColor: '#111111ed', color: '#ffff', borderRadius: BASIC_BORDER_RADIUS },
    buttonContents: '확인',
  },
};
