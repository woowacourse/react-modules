import type { Meta, StoryObj } from '@storybook/react';

import '../lib/styles/reset.css';
import { Modal } from '../lib';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
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

export const ModalSample: Story = {
  args: {
    children: <div>modal</div>,
    openModal: true,
    setOpenModal: () => {},
    type: 'bottom',
    animationDuration: 1000,
    isNeedAnimation: true,
    position: { top: 50, left: 50 },
  },
};
