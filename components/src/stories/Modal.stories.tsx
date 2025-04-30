import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>hih</div>,
  },
};
