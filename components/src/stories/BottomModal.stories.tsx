import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../lib/Modal';
import '../lib/styles/reset.css';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    setOpenModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BottomModalSample: Story = {
  args: {
    children: (
      <>
        <h1>Bottom Modal</h1>
      </>
    ),
    openModal: true,
    setOpenModal: () => {},
    type: 'bottom',
    animationDuration: 1000,
    isNeedAnimation: true,
  },
};
