import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { AppCancelButton, AppConfirmButton, AppModalContents, ModalTitle } from '../App';
import { ConfirmModal } from '../lib';

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
    modalTargetEl: null,
    title: <ModalTitle>alert modal</ModalTitle>,
    contents: (
      <AppModalContents>
        <p>open</p>
        <p>confirm modal</p>
      </AppModalContents>
    ),
    buttonContainerJustifyContent: 'space-between',
    children: (
      <>
        <AppConfirmButton />
        <AppCancelButton />
      </>
    ),
  },
};
