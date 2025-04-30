import type { Meta, StoryObj } from '@storybook/react';
import { ModalComponent } from '../lib';

const meta = {
  title: 'Modal',
  component: ModalComponent,
} satisfies Meta<typeof ModalComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalType: 'center',
    closeType: 'top',
    titleText: 'text',
    children: 'children',
  },
};
