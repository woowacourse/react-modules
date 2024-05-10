import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';

import { CenterModal, ModalContainer } from '../lib';

const meta: Meta<typeof CenterModal> = {
  title: 'Modal',
  component: CenterModal,
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

export const CenterModalSample: Story = {
  args: {
    openModal: true,
    setOpenModal: () => {},
    children: (
      <>
        <h1>Center Modal</h1>
        <ModalContainer.Button isCloseModal={true}>close button</ModalContainer.Button>
      </>
    ),
  },
};
