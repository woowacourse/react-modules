import '../lib/styles/reset.css';

import type { Meta, StoryObj } from '@storybook/react';
import BasicCenterModal from '../lib/Modal/BasicCenterModal';

const meta: Meta<typeof BasicCenterModal> = {
  title: 'BasicCenterModal',
  component: BasicCenterModal,
  argTypes: {
    closeButtonType: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    closeModal: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicCenterModalWidthCloseBoxButton: Story = {
  args: {
    children: <div>basic bottom modal</div>,
    closeButtonType: 'box',
    modalTitle: 'Basic Bottom Modal',
    isOpen: true,
    closeModal: () => {},
  },
};
export const BasicCenterModalWidthCloseIconButton: Story = {
  args: {
    children: <div>basic bottom modal</div>,
    closeButtonType: 'icon',
    modalTitle: 'Basic Bottom Modal',
    isOpen: true,
    closeModal: () => {},
  },
};
