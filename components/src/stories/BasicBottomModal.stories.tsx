import '../lib/styles/reset.css';

import type { Meta, StoryObj } from '@storybook/react';
import { BasicBottomModal } from '../lib';

const meta: Meta<typeof BasicBottomModal> = {
  title: 'BasicBottomModal',
  component: BasicBottomModal,
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

export const BasicBottomModalWidthCloseBoxButton: Story = {
  args: {
    children: <div>basic bottom modal</div>,
    closeButtonType: 'box',
    modalTitle: 'Basic Bottom Modal',
    isOpen: true,
    closeModal: () => {},
  },
};
export const BasicBottomModalWidthCloseIconButton: Story = {
  args: {
    children: <div>basic bottom modal</div>,
    closeButtonType: 'icon',
    modalTitle: 'Basic Bottom Modal',
    isOpen: true,
    closeModal: () => {},
  },
};
