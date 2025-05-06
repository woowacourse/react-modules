import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  tags: ['autodocs'],
  component: Modal,
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Center: Story = {
  render: () => {
    return (
      <Modal title="제목" isOpen position="center">
        내용
      </Modal>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    return (
      <Modal title="제목" isOpen position="bottom">
        내용
      </Modal>
    );
  },
};
